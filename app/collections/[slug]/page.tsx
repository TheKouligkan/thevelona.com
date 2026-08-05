import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/cards";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { collections, getCollection, getProductsForCollection } from "@/lib/sample-data";

export function generateStaticParams() { return collections.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const collection = getCollection((await params).slug);
  return collection ? { title: collection.name, description: collection.description } : {};
}

export default async function CollectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const collection = getCollection((await params).slug);
  if (!collection) notFound();
  const items = getProductsForCollection(collection.slug);
  return <main><Header /><section className="collection-hero"><Image src={collection.image} alt={`${collection.name} collection`} fill priority sizes="100vw" /><div className="collection-hero-content page-shell"><p className="eyebrow">{collection.eyebrow}</p><h1>{collection.name}</h1><p>{collection.description} Handmade in small quantities, with every variation celebrated.</p></div></section><section className="inner-section page-shell"><div className="page-heading-row"><h2>The <em>edit.</em></h2><p>Current pieces from the {collection.name} collection.</p></div>{items.length ? <div className="shop-grid">{items.map((product) => <ProductCard key={product.slug} product={product} />)}</div> : <div className="empty-note"><h2>New pieces are <em>in the making.</em></h2><p>This collection moves in small batches. Follow our Instagram or join the newsletter for the next drop.</p></div>}</section><Footer /></main>;
}
