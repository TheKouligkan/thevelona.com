const RESEND_ENDPOINT = "https://api.resend.com/emails";
const DEFAULT_INBOX = "hello@thevelona.com";
const DEFAULT_FROM = "VELONA Website <hello@thevelona.com>";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FormKind = "newsletter" | "wholesale";
type FormValues = Record<string, unknown>;

const requestLog = new Map<string, number[]>();

function text(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isRateLimited(request: Request) {
  const address =
    request.headers.get("cf-connecting-ip") ??
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown";
  const now = Date.now();
  const windowStart = now - 10 * 60 * 1000;
  const recent = (requestLog.get(address) ?? []).filter((time) => time > windowStart);

  if (recent.length >= 6) return true;

  recent.push(now);
  requestLog.set(address, recent);
  return false;
}

function notification(kind: FormKind, values: FormValues) {
  const email = text(values.email, 254).toLowerCase();

  if (!EMAIL_PATTERN.test(email)) throw new Error("invalid_form");

  if (kind === "newsletter") {
    return {
      subject: "New VELONA newsletter subscriber",
      replyTo: email,
      html: `
        <div style="font-family:Arial,sans-serif;color:#241916;line-height:1.6">
          <p style="margin:0 0 8px;font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#7b665e">VELONA website</p>
          <h1 style="margin:0 0 24px;font-family:Georgia,serif;font-size:32px;font-weight:400">A new person joined the newsletter.</h1>
          <p style="margin:0"><strong>Email</strong><br><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
          <p style="margin:20px 0 0;color:#7b665e;font-size:13px">Source: Website newsletter</p>
        </div>`,
      plain: `New VELONA newsletter subscriber\n\nEmail: ${email}\nSource: Website newsletter`,
    };
  }

  const firstName = text(values.firstName, 80);
  const lastName = text(values.lastName, 80);
  const businessName = text(values.businessName, 120);
  const website = text(values.website, 300);
  const country = text(values.country, 100);
  const storeType = text(values.storeType, 120);
  const message = text(values.message, 4000);

  if (!firstName || !lastName || !businessName || !country || !message) {
    throw new Error("invalid_form");
  }

  const rows = [
    ["Name", `${firstName} ${lastName}`],
    ["Email", email],
    ["Business", businessName],
    ["Website", website || "Not provided"],
    ["Country", country],
    ["Store type", storeType || "Not provided"],
  ];

  const htmlRows = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 18px 8px 0;color:#7b665e;vertical-align:top">${escapeHtml(label)}</td><td style="padding:8px 0;vertical-align:top">${escapeHtml(value)}</td></tr>`,
    )
    .join("");

  return {
    subject: `Wholesale inquiry — ${businessName}`,
    replyTo: email,
    html: `
      <div style="font-family:Arial,sans-serif;color:#241916;line-height:1.6">
        <p style="margin:0 0 8px;font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#7b665e">VELONA website</p>
        <h1 style="margin:0 0 24px;font-family:Georgia,serif;font-size:32px;font-weight:400">A new wholesale inquiry.</h1>
        <table style="border-collapse:collapse;font-size:14px">${htmlRows}</table>
        <div style="margin-top:24px;padding:20px;background:#f5eee5;border-left:3px solid #60654d">
          <strong>About their store</strong>
          <p style="margin:8px 0 0;white-space:pre-wrap">${escapeHtml(message)}</p>
        </div>
      </div>`,
    plain: `New VELONA wholesale inquiry\n\n${rows.map(([label, value]) => `${label}: ${value}`).join("\n")}\n\nAbout their store:\n${message}`,
  };
}

export async function POST(request: Request) {
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return Response.json({ error: "Invalid request." }, { status: 415 });
  }

  if (isRateLimited(request)) {
    return Response.json({ error: "Please wait before trying again." }, { status: 429 });
  }

  try {
    const body = (await request.json()) as { type?: unknown; data?: unknown };
    const kind = body.type;
    const values = body.data;

    if ((kind !== "newsletter" && kind !== "wholesale") || !values || typeof values !== "object") {
      return Response.json({ error: "Invalid form." }, { status: 400 });
    }

    const fields = values as FormValues;

    // A hidden field catches simple automated submissions without helping bots adapt.
    if (text(fields.companyFax, 200)) {
      return Response.json({ ok: true });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured.");
      return Response.json({ error: "Email service is unavailable." }, { status: 503 });
    }

    const email = notification(kind, fields);
    const resendResponse = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM_EMAIL || DEFAULT_FROM,
        to: [process.env.VELONA_INBOX_EMAIL || DEFAULT_INBOX],
        reply_to: email.replyTo,
        subject: email.subject,
        html: email.html,
        text: email.plain,
      }),
    });

    if (!resendResponse.ok) {
      console.error("Resend rejected a website form submission.", resendResponse.status);
      return Response.json({ error: "Email could not be sent." }, { status: 502 });
    }

    return Response.json({ ok: true });
  } catch (error) {
    if (error instanceof Error && error.message === "invalid_form") {
      return Response.json({ error: "Please check the form details." }, { status: 400 });
    }

    console.error("Website form submission failed.", error);
    return Response.json({ error: "Email could not be sent." }, { status: 500 });
  }
}
