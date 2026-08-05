import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const editorial = Cormorant_Garamond({
  variable: "--font-editorial",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thevelona.com"),
  title: {
    default: "VELONA — Crochet, Reconsidered",
    template: "%s — VELONA",
  },
  description: "Hand-crocheted fashion shaped slowly in Greece. Limited pieces made with natural fibers, skilled hands, and lasting intention.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    type: "website",
    url: "https://thevelona.com",
    siteName: "VELONA",
    title: "VELONA — Crochet, Reconsidered",
    description: "A quiet expression of the handmade. Slow fashion, shaped stitch by stitch in Greece.",
    images: [{ url: "/og.png", width: 1700, height: 900, alt: "VELONA — A quiet expression of the handmade" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "VELONA — Crochet, Reconsidered",
    description: "A quiet expression of the handmade. Slow fashion, shaped stitch by stitch in Greece.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${editorial.variable} ${sans.variable}`}>{children}</body>
    </html>
  );
}
