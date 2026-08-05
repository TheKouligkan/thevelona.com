import type { Metadata } from "next";
import { CollectionCard } from "@/components/cards";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { collections } from "@/lib/sample-data";

export const metadata: Metadata = { title: "Collections", description: "Discover the Clutch, Fringe, Jacket, Bags and Swimwear collections by VELONA." };

export default function CollectionsPage() {
  return <main className="inner-main"><Header tone="dark" /><section className="inner-hero"><div className="page-shell"><p className="eyebrow">Five ways into our world</p><h1>Choose your<br /><em>character.</em></h1><p>From expressive jackets to sun-ready crochet and signature bags, every collection begins with texture and feeling.</p></div></section><section className="inner-section page-shell"><div className="collection-list-grid">{collections.map((collection, index) => <CollectionCard key={collection.slug} collection={collection} index={index} />)}</div></section><Footer /></main>;
}
