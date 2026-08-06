import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { ProductCard } from "@/components/cards";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import {
  formatPrice,
  getProduct,
  getRelatedProducts,
  products,
  type ProductMedia,
} from "@/lib/sample-data";
import { notFound } from "next/navigation";

type ProductPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = getProduct((await params).slug);
  if (!product) return {};

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: `${product.name} — VELONA`,
      description: product.description,
      images: [{ url: product.image, alt: `${product.name} in ${product.color}` }],
    },
  };
}

function SupportingMedia({ media, index }: { media: ProductMedia; index: number }) {
  return (
    <figure className={`product-supporting-media product-supporting-media-${index + 1}`}>
      {media.kind === "video" ? (
        // Product clips are exported without speech or other meaningful audio.
        // eslint-disable-next-line jsx-a11y/media-has-caption
        <video
          autoPlay={media.silentLoop}
          controls={!media.silentLoop}
          loop={media.silentLoop}
          muted={media.silentLoop}
          playsInline
          preload={media.silentLoop ? "auto" : "metadata"}
          poster={media.poster}
          aria-label={media.alt}
        >
          <source src={media.src} type="video/mp4" />
        </video>
      ) : (
        <Image
          src={media.src}
          alt={media.alt}
          fill
          sizes="(max-width: 760px) 100vw, 48vw"
          style={{ objectPosition: media.position ?? "center" }}
        />
      )}
      <figcaption><span>0{index + 2}</span>{media.alt}</figcaption>
    </figure>
  );
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = getProduct((await params).slug);
  if (!product) notFound();

  const currentIndex = products.findIndex((item) => item.slug === product.slug);
  const related = getRelatedProducts(product);
  const inquiryHref = `mailto:hello@thevelona.com?subject=${encodeURIComponent(`Product inquiry — ${product.name}`)}&body=${encodeURIComponent(`Hello VELONA,\n\nI would like to ask about ${product.name} in ${product.color}.\n\n`)}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: [`https://thevelona.com${product.image}`],
    description: product.description,
    category: product.category,
    color: product.color,
    material: product.materials.join(", "),
    brand: { "@type": "Brand", name: "VELONA" },
  };

  return (
    <main className="product-page">
      <Header tone="dark" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <nav className="product-breadcrumb page-shell" aria-label="Breadcrumb">
        <Link href="/shop"><ArrowLeft aria-hidden="true" /> Shop</Link>
        <span aria-hidden="true">/</span>
        <Link href={`/collections/${product.categorySlug}`}>{product.category}</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{product.name}</span>
      </nav>

      <section className="product-detail page-shell" aria-labelledby="product-title">
        <div className="product-primary-media">
          <Image
            src={product.image}
            alt={`${product.name} in ${product.color}`}
            fill
            priority
            sizes="(max-width: 820px) 100vw, 57vw"
          />
          <span className="product-primary-index" aria-hidden="true">01 / {String(product.media.length + 1).padStart(2, "0")}</span>
        </div>

        <aside className="product-summary">
          <div className="product-summary-topline">
            <p className="eyebrow">{product.category} / {product.color}</p>
            <span>VELONA {String(currentIndex + 1).padStart(2, "0")}</span>
          </div>
          <h1 id="product-title">{product.name}</h1>
          <div className="product-order-state">
            <strong>{formatPrice(product.price, product.currency)}</strong>
            <span>{product.note}</span>
          </div>
          <p className="product-description">{product.description}</p>
          <Link className="button button-dark product-inquiry-button" href={inquiryHref}>
            Ask about this piece <ArrowUpRight aria-hidden="true" />
          </Link>
          <p className="product-handmade-note">Every VELONA piece is made by hand in Greece. Small variations in stitch, shape and colour are part of its identity.</p>

          <dl className="product-facts">
            <div><dt>Colour</dt><dd>{product.color}</dd></div>
            <div><dt>Material</dt><dd>{product.materials.join(" / ")}</dd></div>
            <div><dt>Making</dt><dd>Handmade in small quantities</dd></div>
            <div><dt>Origin</dt><dd>Halkidiki, Greece</dd></div>
          </dl>

          <div className="product-accordions">
            <details open>
              <summary>The piece <span aria-hidden="true">+</span></summary>
              <ul>{product.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
            </details>
            <details>
              <summary>Size and fit <span aria-hidden="true">+</span></summary>
              <p>{product.fit}</p>
            </details>
            <details>
              <summary>Care <span aria-hidden="true">+</span></summary>
              <ul>{product.care.map((instruction) => <li key={instruction}>{instruction}</li>)}</ul>
            </details>
            <details>
              <summary>Availability and timing <span aria-hidden="true">+</span></summary>
              <p>{product.availability}</p>
            </details>
          </div>
        </aside>
      </section>

      <section className="product-story-section">
        <div className="page-shell product-story-grid">
          <div className="product-story-heading">
            <p className="eyebrow">The story of the piece</p>
            <h2>Made slowly.<br /><em>Worn personally.</em></h2>
          </div>
          <div className="product-story-copy">
            <p>{product.story}</p>
            <div className="product-story-notes">
              <span>01</span><p>Hand shaped</p>
              <span>02</span><p>Small batch</p>
              <span>03</span><p>Made with feeling</p>
            </div>
          </div>
        </div>
      </section>

      <section className="product-media-section page-shell" aria-label={`${product.name} gallery`}>
        {product.media.map((media, index) => <SupportingMedia key={`${media.src}-${index}`} media={media} index={index} />)}
      </section>

      <section className="product-related inner-section page-shell" aria-labelledby="related-title">
        <div className="page-heading-row">
          <div><p className="eyebrow">Continue the edit</p><h2 id="related-title">You may also <em>love.</em></h2></div>
          <Link className="text-link" href="/shop">See all pieces <ArrowRight aria-hidden="true" /></Link>
        </div>
        <div className="shop-grid">{related.map((item) => <ProductCard key={item.slug} product={item} />)}</div>
      </section>

      <section className="product-contact-band">
        <div className="page-shell">
          <p className="eyebrow">A piece made for you</p>
          <h2>Have a colour or detail<br /><em>in mind?</em></h2>
          <p>Every made-to-order conversation begins personally. Tell us what drew you to this piece and what you would like to make your own.</p>
          <Link className="button button-ivory" href={inquiryHref}>Start a conversation <ArrowUpRight aria-hidden="true" /></Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
