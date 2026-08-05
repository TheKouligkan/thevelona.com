import type { Metadata } from "next";
import Image from "next/image";
import { PageOutro } from "@/components/editorial";
import { Footer } from "@/components/footer";
import { WholesaleForm } from "@/components/forms";
import { Header } from "@/components/header";

export const metadata: Metadata = { title: "Wholesale", description: "Wholesale inquiries for boutiques, concept stores and hospitality spaces." };

export default function WholesalePage() {
  return (
    <main className="inner-main page-wholesale">
      <Header tone="dark" />
      <section className="inner-hero"><div className="page-shell inner-hero-split"><div><p className="eyebrow">For independent retailers</p><h1>Let’s make<br /><em>something special.</em></h1><p>We work with stores that see craft as more than a trend. Tell us about your space and the collections you have in mind.</p></div><div className="inner-hero-image"><Image src="/velona/fringe-bag.jpg" alt="VELONA fringe bag for the wholesale collection" fill sizes="(max-width: 760px) 100vw, 40vw" /></div></div></section>
      <section className="wholesale-details page-shell"><div><span>01</span><h2>For boutiques</h2><p>Distinctive bags, jackets and seasonal pieces with a clear handmade story.</p></div><div><span>02</span><h2>For concept spaces</h2><p>Small-batch objects that bring texture, colour and conversation into your edit.</p></div><div><span>03</span><h2>Personal support</h2><p>Direct communication, seasonal line sheets and a considered opening selection.</p></div></section>
      <section className="wholesale"><div className="page-shell wholesale-grid"><div className="wholesale-intro"><p className="eyebrow">A personal partnership</p><h2>Small batches.<br /><em>Strong identity.</em></h2><p>Our crochet bags, jackets and seasonal pieces bring tactile colour and a genuine maker story to your edit.</p><ul><li>Flexible opening conversations</li><li>Seasonal line sheets</li><li>Limited, distinctive pieces</li><li>Direct support from VELONA</li></ul></div><WholesaleForm /></div></section>
      <PageOutro eyebrow="Prefer to begin by email?" title="Let’s start with your space and your point of view." copy="Share your store, location and the collections you are interested in. We will respond personally." href="/contact" label="Contact VELONA" image="/velona/blue-bag.jpg" imageAlt="Blue VELONA bag styled outdoors" />
      <Footer />
    </main>
  );
}
