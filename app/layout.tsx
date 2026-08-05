import type { Metadata } from "next";
import { Bodoni_Moda, Manrope } from "next/font/google";
import "./globals.css";

const editorial = Bodoni_Moda({ variable: "--font-editorial", subsets: ["latin"], weight: ["400", "500", "600"], style: ["normal", "italic"] });
const sans = Manrope({ variable: "--font-sans", subsets: ["latin"], weight: ["400", "500", "600"] });
const fontVariables = {
  "--font-editorial": editorial.style.fontFamily,
  "--font-sans": sans.style.fontFamily,
} as React.CSSProperties;

export const metadata: Metadata = {
  metadataBase: new URL("https://thevelona.com"),
  title: { default: "VELONA — Girl with Grandma Hobbies", template: "%s — VELONA" },
  description: "Crochet inspired by nature, handmade slowly in Greece by two generations of women.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    type: "website", url: "https://thevelona.com", siteName: "VELONA",
    title: "VELONA — Girl with Grandma Hobbies",
    description: "Crochet inspired by nature, handmade slowly in Greece by two generations of women.",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "VELONA — made with her, worn your way" }],
  },
  twitter: { card: "summary_large_image", title: "VELONA — Girl with Grandma Hobbies", description: "Crochet inspired by nature, handmade slowly in Greece by two generations of women.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${editorial.variable} ${sans.variable}`} style={fontVariables}>{children}</body></html>;
}
