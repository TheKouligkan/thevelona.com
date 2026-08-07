import type { Metadata } from "next";
import { Bodoni_Moda, Manrope } from "next/font/google";
import { RouteScrollManager } from "@/components/route-scroll-manager";
import { MotionLayer } from "@/components/motion-layer";
import "./globals.css";

const editorial = Bodoni_Moda({ variable: "--font-editorial", subsets: ["latin"], weight: ["400", "500"], style: ["normal", "italic"], display: "swap" });
const sans = Manrope({ variable: "--font-sans", subsets: ["latin"], weight: ["400", "500", "600"] });
const fontVariables = {
  "--font-editorial": editorial.style.fontFamily,
  "--font-sans": sans.style.fontFamily,
} as React.CSSProperties;

export const metadata: Metadata = {
  metadataBase: new URL("https://thevelona.com"),
  title: { default: "VELONA — Girl with Grandma Hobbies", template: "%s — VELONA" },
  description: "Crochet inspired by nature, handmade slowly in Greece by two generations of women.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website", url: "https://thevelona.com", siteName: "VELONA",
    title: "VELONA — Girl with Grandma Hobbies",
    description: "Crochet inspired by nature, handmade slowly in Greece by two generations of women.",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "VELONA — made with her, worn your way" }],
  },
  twitter: { card: "summary_large_image", title: "VELONA — Girl with Grandma Hobbies", description: "Crochet inspired by nature, handmade slowly in Greece by two generations of women.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${editorial.variable} ${sans.variable}`} style={fontVariables}><RouteScrollManager /><MotionLayer />{children}</body></html>;
}
