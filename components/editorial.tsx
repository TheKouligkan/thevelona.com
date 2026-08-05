import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { collections } from "@/lib/sample-data";

export function CollectionNav() {
  return (
    <nav className="collection-nav" aria-label="Browse collections">
      <div className="page-shell collection-nav-inner">
        <span>Shop by signature</span>
        {collections.map((collection, index) => (
          <Link key={collection.slug} href={`/collections/${collection.slug}`}>
            <small>0{index + 1}</small>{collection.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export function PageOutro({ eyebrow, title, copy, href, label, image, imageAlt }: {
  eyebrow: string;
  title: string;
  copy: string;
  href: string;
  label: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="page-outro">
      <div className="page-outro-image"><Image src={image} alt={imageAlt} fill sizes="(max-width: 760px) 100vw, 42vw" /></div>
      <div className="page-outro-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{copy}</p>
        <Link className="button button-ivory" href={href}>{label}<ArrowRight aria-hidden="true" /></Link>
      </div>
    </section>
  );
}

export function BrandPrinciples() {
  const principles = [
    ["01", "Made by people", "Every stitch carries the pace and touch of its maker."],
    ["02", "Built in small batches", "Limited production keeps every drop considered and personal."],
    ["03", "Designed with feeling", "Colour, texture and form are chosen to make an emotional connection."],
  ];
  return (
    <div className="brand-principles">
      {principles.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}
    </div>
  );
}
