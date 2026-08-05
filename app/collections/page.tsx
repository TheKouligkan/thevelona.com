import type { Metadata } from "next";
import Image from "next/image";
import { CollectionCard } from "@/components/cards";
import { BrandPrinciples, PageOutro } from "@/components/editorial";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { collections } from "@/lib/sample-data";

export const metadata: Metadata = { title: "Collections", description: "Discover the Clutch, Fringe, Jacket, Bags and Swimwear collections by VELONA." };

export default function CollectionsPage() {
  return (
    <main className="inner-main page-collections">
      <Header tone="dark" />
      <section className="inner-hero">
        <div className="page-shell inner-hero-split">
          <div><p className="eyebrow">Five ways into our world</p><h1>Choose your<br /><em>character.</em></h1><p>From expressive jackets to sun-ready crochet and signature bags, every collection begins with texture and feeling.</p></div>
          <div className="inner-hero-image collections-hero-image"><Image src="/velona/swim-detail.jpg" alt="Colourful handmade crochet details by VELONA" fill priority sizes="(max-width: 760px) 100vw, 40vw" /></div>
        </div>
      </section>
      <section className="inner-section page-shell"><div className="collection-list-grid">{collections.map((collection, index) => <CollectionCard key={collection.slug} collection={collection} index={index} />)}</div></section>
      <section className="manifesto-band"><div className="page-shell"><p className="eyebrow">The VELONA standard</p><h2>Traditional handwork.<br /><em>Unexpected character.</em></h2><BrandPrinciples /></div></section>
      <PageOutro eyebrow="See everything together" title="One edit. Every VELONA mood." copy="Explore the current selection across Clutch, Fringe, Jacket, Bags and Swimwear." href="/shop" label="Shop all pieces" image="/velona/blue-bag.jpg" imageAlt="Blue VELONA crochet shoulder bag" />
      <Footer />
    </main>
  );
}
