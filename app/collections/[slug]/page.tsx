import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/cards";
import { CollectionNav, PageOutro } from "@/components/editorial";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { collections, getCollection, getProductsForCollection } from "@/lib/sample-data";

const collectionNotes: Record<string, { detail: string; statement: string; note: string }> = {
  clutch: { detail: "/velona/stitch-closeup.jpg", statement: "Soft structure with a strong point of view.", note: "Dense, tactile stitches give every clutch its shape. Colours are selected in small runs, so each release has its own mood." },
  fringe: { detail: "/velona/stitch-closeup.jpg", statement: "A little movement changes everything.", note: "Textile, pattern and long fringe come together in a shoulder bag designed to animate every look." },
  jacket: { detail: "/velona/jacket-detail.jpg", statement: "A traditional square becomes modern outerwear.", note: "Each jacket is composed panel by panel, balancing colour, scale and texture until the whole piece finds its rhythm." },
  bags: { detail: "/velona/beach-tote.jpg", statement: "Everyday shapes, made more personal.", note: "From mini handles to generous totes, these are useful pieces with the unmistakable character of the handmade." },
  swimwear: { detail: "/velona/swim-detail.jpg", statement: "Crochet made for colour, sun and movement.", note: "Playful separates bring the VELONA palette to summer. Every shape is finished by hand in limited quantities." },
};

export function generateStaticParams() { return collections.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const collection = getCollection((await params).slug);
  return collection ? { title: collection.name, description: collection.description } : {};
}

export default async function CollectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const collection = getCollection((await params).slug);
  if (!collection) notFound();
  const items = getProductsForCollection(collection.slug);
  const note = collectionNotes[collection.slug];
  const currentIndex = collections.findIndex((item) => item.slug === collection.slug);
  const nextCollection = collections[(currentIndex + 1) % collections.length];

  return (
    <main className={`page-collection page-collection-${collection.slug}`}>
      <Header />
      <section className="collection-hero">
        <Image src={collection.image} alt={`${collection.name} collection`} fill priority sizes="100vw" />
        <div className="collection-hero-content page-shell"><p className="eyebrow">{collection.eyebrow}</p><h1>{collection.name}</h1><p>{collection.description} Handmade in small quantities, with every variation celebrated.</p></div>
      </section>
      <CollectionNav />
      <section className="collection-editorial page-shell">
        <div className="collection-editorial-image"><Image src={note.detail} alt={`Detail from the VELONA ${collection.name} collection`} fill sizes="(max-width: 760px) 100vw, 48vw" /></div>
        <div className="collection-editorial-copy"><p className="eyebrow">Inside the collection</p><h2>{note.statement}</h2><p>{note.note}</p><dl><div><dt>Process</dt><dd>Made by hand</dd></div><div><dt>Release</dt><dd>Small batch</dd></div><div><dt>Character</dt><dd>Uniquely yours</dd></div></dl></div>
      </section>
      <section className="inner-section page-shell">
        <div className="page-heading-row"><div><p className="eyebrow">Available now</p><h2>The <em>edit.</em></h2></div><p>Current pieces from the {collection.name} collection.</p></div>
        {items.length ? <div className="shop-grid">{items.map((product) => <ProductCard key={product.slug} product={product} />)}</div> : <div className="empty-note"><h2>New pieces are <em>in the making.</em></h2><p>This collection moves in small batches. Follow our Instagram or join the newsletter for the next drop.</p></div>}
      </section>
      <PageOutro eyebrow="Continue exploring" title={`Next: ${nextCollection.name}`} copy={nextCollection.description} href={`/collections/${nextCollection.slug}`} label={`Explore ${nextCollection.name}`} image={nextCollection.image} imageAlt={`${nextCollection.name} collection by VELONA`} />
      <Footer />
    </main>
  );
}
