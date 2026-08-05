"use client";

import { ConvexHttpClient } from "convex/browser";
import { ArrowRight } from "lucide-react";
import { FormEvent, useState } from "react";
import { api } from "@/convex/_generated/api";

type FormStatus = "idle" | "submitting" | "success" | "error";

function getClient() {
  const url = process.env.NEXT_PUBLIC_CONVEX_URL;
  return url ? new ConvexHttpClient(url) : null;
}

export function NewsletterForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    try {
      const client = getClient();
      if (client) await client.mutation(api.storefront.subscribeToNewsletter, { email: String(form.get("email")), source: "website_newsletter" });
      setStatus("success");
      formElement.reset();
    } catch { setStatus("error"); }
  }
  return (
    <form className="newsletter-form" onSubmit={submit}>
      <label className="sr-only" htmlFor="newsletter-email">Email address</label>
      <input id="newsletter-email" name="email" type="email" placeholder="Your email address" required autoComplete="email" />
      <button type="submit" disabled={status === "submitting"} aria-label="Join the newsletter"><ArrowRight aria-hidden="true" /></button>
      <p className="form-message" aria-live="polite">{status === "success" && "Welcome to our small handmade world."}{status === "error" && "Something went wrong. Please try again."}</p>
    </form>
  );
}

export function WholesaleForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    try {
      const client = getClient();
      if (client) await client.mutation(api.storefront.submitWholesaleInquiry, {
        firstName: String(form.get("firstName")), lastName: String(form.get("lastName")), email: String(form.get("email")),
        businessName: String(form.get("businessName")), website: String(form.get("website")) || undefined,
        country: String(form.get("country")), storeType: String(form.get("storeType")) || undefined, message: String(form.get("message")),
      });
      setStatus("success");
      formElement.reset();
    } catch { setStatus("error"); }
  }
  return (
    <form className="wholesale-form" onSubmit={submit}>
      <div className="form-row"><label><span>First name</span><input name="firstName" required autoComplete="given-name" /></label><label><span>Last name</span><input name="lastName" required autoComplete="family-name" /></label></div>
      <div className="form-row"><label><span>Work email</span><input name="email" type="email" required autoComplete="email" /></label><label><span>Business name</span><input name="businessName" required autoComplete="organization" /></label></div>
      <div className="form-row"><label><span>Website</span><input name="website" type="url" placeholder="https://" autoComplete="url" /></label><label><span>Country</span><input name="country" required autoComplete="country-name" /></label></div>
      <label><span>Tell us about your store</span><textarea name="message" rows={4} required placeholder="Location, aesthetic, and the pieces you are interested in…" /></label>
      <button className="button button-ivory" type="submit" disabled={status === "submitting"}>{status === "submitting" ? "Sending…" : "Send inquiry"}<ArrowRight aria-hidden="true" /></button>
      <p className="form-message" aria-live="polite">{status === "success" && "Thank you. We’ll be in touch within 2–3 business days."}{status === "error" && "We couldn’t send your inquiry. Please try again."}</p>
    </form>
  );
}
