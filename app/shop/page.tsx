import type { Metadata } from "next";
import { ProductCard } from "@/components/cards";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { products } from "@/lib/sample-data";

export const metadata: Metadata = { title: "Shop", description: "Explore VELONA handmade crochet bags, jackets, swimwear and accessories." };

export default function ShopPage() {
  return <main className="inner-main"><Header tone="dark" /><section className="inner-hero"><div className="page-shell"><p className="eyebrow">The VELONA edit</p><h1>Made to be<br /><em>remembered.</em></h1><p>Explore our signature crochet pieces. Everything is made by hand in small batches, so subtle variations are part of what makes yours unique.</p></div></section><section className="inner-section page-shell"><div className="page-heading-row"><h2>All <em>pieces.</em></h2><p>Limited drops, one-of-a-kind colour stories and handwork you can feel.</p></div><div className="shop-grid">{products.map((product) => <ProductCard key={product.slug} product={product} />)}</div></section><Footer /></main>;
}
