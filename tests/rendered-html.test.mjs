import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }), {
    ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
  }, { waitUntil() {}, passThroughOnException() {} });
}

test("server-renders the VELONA homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /VELONA/);
  assert.match(html, /Wear the/);
  assert.match(html, /Our signatures/);
  assert.match(html, /A shared dream/);
  assert.match(html, /Wholesale/);
});

test("keeps authentic campaign assets and Convex-backed forms connected", async () => {
  await Promise.all([
    access(new URL("../public/velona/hero-jacket.jpg", import.meta.url)),
    access(new URL("../public/velona/clutch-motion.mp4", import.meta.url)),
    access(new URL("../public/og-velona.png", import.meta.url)),
  ]);
  const [homepage, forms, schema] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../components/forms.tsx", import.meta.url), "utf8"),
    readFile(new URL("../convex/schema.ts", import.meta.url), "utf8"),
  ]);
  assert.match(homepage, /getHomepageData/);
  assert.match(forms, /subscribeToNewsletter/);
  assert.match(forms, /submitWholesaleInquiry/);
  assert.match(schema, /newsletterSubscribers/);
  assert.match(schema, /wholesaleInquiries/);
});
