import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const editorial = Cormorant_Garamond({ variable: "--font-editorial", subsets: ["latin"], weight: ["400", "500", "600"], style: ["normal", "italic"] });
const sans = Manrope({ variable: "--font-sans", subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://thevelona.com"),
  title: { default: "VELONA — Handmade Crochet with Character", template: "%s — VELONA" },
  description: "Handmade crochet bags, jackets, swimwear and accessories created in Greece by two generations of women.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    type: "website", url: "https://thevelona.com", siteName: "VELONA",
    title: "VELONA — Handmade Crochet with Character",
    description: "Bold texture, joyful colour and pieces made slowly by two generations of women.",
    images: [{ url: "/og-velona.png", width: 1723, height: 913, alt: "VELONA — made by two generations, worn your way" }],
  },
  twitter: { card: "summary_large_image", title: "VELONA — Handmade Crochet with Character", description: "Bold texture, joyful colour and pieces made slowly by two generations of women.", images: ["/og-velona.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${editorial.variable} ${sans.variable}`}>{children}</body></html>;
}
