import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/footer";
import { WholesaleForm } from "@/components/forms";
import { Header } from "@/components/header";

export const metadata: Metadata = { title: "Wholesale", description: "Wholesale inquiries for boutiques, concept stores and hospitality spaces." };

export default function WholesalePage() {
  return <main className="inner-main"><Header tone="dark" /><section className="inner-hero"><div className="page-shell inner-hero-split"><div><p className="eyebrow">For independent retailers</p><h1>Let’s make<br /><em>something special.</em></h1><p>We work with stores that see craft as more than a trend. Tell us about your space and the collections you have in mind.</p></div><div className="inner-hero-image"><Image src="/velona/fringe-bag.jpg" alt="VELONA fringe bag for wholesale collection" fill sizes="(max-width: 760px) 100vw, 40vw" /></div></div></section><section className="wholesale"><div className="page-shell wholesale-grid"><div className="wholesale-intro"><p className="eyebrow">A personal partnership</p><h2>Small batches.<br /><em>Strong identity.</em></h2><p>Our crochet bags, jackets and seasonal pieces bring tactile colour and a genuine maker story to your edit.</p><ul><li>Flexible opening conversations</li><li>Seasonal line sheets</li><li>Limited, distinctive pieces</li><li>Direct support from VELONA</li></ul></div><WholesaleForm /></div></section><Footer /></main>;
}
