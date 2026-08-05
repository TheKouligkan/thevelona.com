import type { Metadata } from "next";
import Image from "next/image";
import { ProductCard } from "@/components/cards";
import { CollectionNav, PageOutro } from "@/components/editorial";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { products } from "@/lib/sample-data";

export const metadata: Metadata = { title: "Shop", description: "Explore VELONA handmade crochet bags, jackets, swimwear and accessories." };

export default function ShopPage() {
  return (
    <main className="inner-main page-shop">
      <Header tone="dark" />
      <section className="inner-hero">
        <div className="page-shell inner-hero-split">
          <div><p className="eyebrow">The VELONA edit</p><h1>Made to be<br /><em>remembered.</em></h1><p>Expressive crochet pieces made slowly, in small batches. The variations you see are part of what makes every piece personal.</p></div>
          <div className="inner-hero-image shop-hero-image"><Image src="/velona/jacket-detail.jpg" alt="Detailed view of a handmade VELONA crochet jacket" fill priority sizes="(max-width: 760px) 100vw, 40vw" /></div>
        </div>
      </section>
      <CollectionNav />
      <section className="inner-section page-shell">
        <div className="page-heading-row"><div><p className="eyebrow">Current selection</p><h2>All <em>pieces.</em></h2></div><p>Limited drops, one-of-a-kind colour stories and handwork you can feel.</p></div>
        <div className="shop-grid">{products.map((product) => <ProductCard key={product.slug} product={product} />)}</div>
      </section>
      <section className="shop-note page-shell"><p>Need a specific colour?</p><h2>Some pieces begin with a conversation.</h2><a href="mailto:hello@thevelona.com">Tell us what you have in mind</a></section>
      <PageOutro eyebrow="The hands behind it" title="Meet the two generations shaping VELONA." copy="Discover how a grandmother’s knowledge and her granddaughter’s point of view became one handmade world." href="/about" label="Our story" image="/velona/stitch-closeup.jpg" imageAlt="Close-up of VELONA crochet texture" />
      <Footer />
    </main>
  );
}
