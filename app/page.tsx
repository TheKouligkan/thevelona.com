import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CollectionCard, ProductCard } from "@/components/cards";
import { CollectionNav } from "@/components/editorial";
import { Footer } from "@/components/footer";
import { NewsletterForm } from "@/components/forms";
import { Header } from "@/components/header";
import { getHomepageData } from "@/lib/convex";

const worldPosts = [
  { kind: "image", src: "/velona/blue-bag.jpg", alt: "VELONA blue crochet shoulder bag at a neighbourhood market", label: "Street style / Bags" },
  { kind: "video", src: "/velona/jacket-motion.mp4", poster: "/velona/jacket-detail.jpg", alt: "VELONA crochet jacket moving in the city", label: "In motion / Jacket" },
  { kind: "image", src: "/velona/fringe-bag.jpg", alt: "Floral VELONA fringe bag styled with black", label: "Signature / Fringe" },
  { kind: "image", src: "/velona/craft-squares.jpg", alt: "Ivory and cocoa crochet squares in the VELONA studio", label: "At the table / Making" },
  { kind: "video", src: "/velona/clutch-motion.mp4", poster: "/velona/clutch-emerald.jpg", alt: "Emerald VELONA clutch turning in morning light", label: "In motion / Clutch" },
  { kind: "image", src: "/velona/bag-cocoa.jpg", alt: "Cocoa crochet bag styled with denim and a trench coat", label: "Out and about / Bags" },
  { kind: "image", src: "/velona/jacket-brown.jpg", alt: "Brown and ivory VELONA crochet jacket worn outdoors", label: "Our girls / Jacket" },
  { kind: "video", src: "/velona/swim-motion.mp4", poster: "/velona/swim-detail.jpg", alt: "Colourful VELONA crochet swimwear details", label: "Summer notes / Swim" },
  { kind: "image", src: "/velona/clutch-ivory.jpg", alt: "Ivory handmade VELONA clutch", label: "Made slowly / Clutch" },
  { kind: "image", src: "/velona/beach-tote.jpg", alt: "Ivory VELONA crochet tote carried over sunlit rocks by the sea", label: "By the sea / Bags" },
] as const;

export default async function Home() {
  const { collections, bestSellers } = await getHomepageData();

  return (
    <main id="top">
      <Header />
      <section className="hero" aria-labelledby="hero-title">
        <Image className="hero-image" src="/velona/hero-jacket.jpg" alt="VELONA black and ivory granny-square crochet jacket" fill priority sizes="100vw" />
        <div className="hero-shade" />
        <span className="hero-monogram" aria-hidden="true">V</span>
        <div className="hero-content page-shell">
          <p className="hero-kicker">Girl with grandma hobbies / Handmade in Greece</p>
          <h1 id="hero-title">Made with her.<br /><em>Worn your way.</em></h1>
          <p className="hero-copy">Crochet inspired by nature, shaped by two generations, and made slowly in Greece.</p>
          <div className="hero-actions">
            <Link className="button button-ivory" href="/shop">Shop VELONA <ArrowRight aria-hidden="true" /></Link>
            <Link className="text-link light" href="/wholesale">Wholesale <ArrowUpRight aria-hidden="true" /></Link>
          </div>
        </div>
        <a href="#collections" className="hero-scroll" aria-label="Scroll to collections"><ArrowDown aria-hidden="true" /> Explore</a>
        <p className="hero-side-note">Crochet inspired by nature</p>
        <p className="hero-edition">No. 01 <span /> VELONA signature</p>
      </section>
      <CollectionNav />

      <section className="brand-intro page-shell" aria-label="VELONA introduction">
        <div className="brand-intro-aside">
          <p className="section-number">Our small handmade world</p>
          <p className="brand-intro-note">Between two generations<br />Thessaloniki, Greece</p>
        </div>
        <div className="brand-intro-copy">
          <p className="intro-statement">Traditional handcraft,<br /><em>rewritten with character.</em></p>
          <ul className="brand-intro-details" aria-label="VELONA making values">
            <li>Slowly made</li>
            <li>Small batches</li>
            <li>Every piece individual</li>
          </ul>
        </div>
      </section>

      <section className="collections page-shell" id="collections" aria-labelledby="collections-title">
        <div className="section-heading">
          <div><p className="eyebrow">Our signatures</p><h2 id="collections-title">Find your<br /><em>favourite.</em></h2></div>
          <Link className="text-link" href="/collections">All collections <ArrowUpRight aria-hidden="true" /></Link>
        </div>
        <div className="collection-grid">
          {collections.map((collection, index) => <CollectionCard key={collection.slug} collection={collection} index={index} />)}
        </div>
      </section>

      <section className="drop-banner" aria-label="Featured jacket collection">
        <div className="drop-image"><Image src="/velona/jacket-olive.jpg" alt="Olive and blush handmade crochet jacket" fill sizes="(max-width: 760px) 100vw, 55vw" /></div>
        <div className="drop-copy">
          <p className="eyebrow">The statement layer</p>
          <h2>THE JACKET.<br /><em>Made to be noticed.</em></h2>
          <p>A statement layer built one square at a time. Each jacket carries hours of handwork, a distinct colour rhythm and its own small variations.</p>
          <Link className="button button-dark" href="/collections/jacket">Discover Jacket <ArrowRight aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="best-sellers" aria-labelledby="most-loved-title">
        <div className="page-shell">
          <div className="section-heading compact-heading"><div><p className="eyebrow">In your favourites</p><h2 id="most-loved-title">Most <em>loved.</em></h2></div><p className="section-aside">Small-batch pieces that keep finding their people.</p></div>
          <div className="product-grid">{bestSellers.map((product) => <ProductCard key={product.slug} product={product} />)}</div>
          <div className="center-action"><Link className="button button-outline" href="/shop">See the full edit <ArrowRight aria-hidden="true" /></Link></div>
        </div>
      </section>

      <section className="story" aria-labelledby="story-title">
        <div className="story-collage">
          <div className="story-image story-image-main"><Image src="/velona/craft-squares.jpg" alt="Hand-crocheted granny squares being assembled" fill sizes="(max-width: 760px) 100vw, 50vw" /></div>
          <div className="story-image story-image-detail"><Image src="/velona/stitch-closeup.jpg" alt="Close-up of VELONA crochet stitches" fill sizes="220px" /></div>
          <p className="handwritten">from her hands<br />to mine</p>
        </div>
        <div className="story-content">
          <p className="eyebrow">Our story / Two generations</p>
          <h2 id="story-title">A shared dream,<br /><em>stitched together.</em></h2>
          <div className="story-copy">
            <p>I’m Akrivi, named after my beloved grandmother. She dreamed of sharing her love for crochet with the world. Today, we are lucky enough to live that dream together.</p>
            <p>Her experience, patience and passion meet my modern ideas, bringing tradition and the contemporary a little closer with every stitch.</p>
          </div>
          <Link className="text-link light" href="/about">Meet VELONA <ArrowUpRight aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="craft page-shell" aria-labelledby="craft-title">
        <div className="craft-copy">
          <p className="eyebrow">Made by hand, always</p>
          <h2 id="craft-title">No two pieces<br /><em>feel exactly alike.</em></h2>
          <p className="craft-lead">That is the beauty of handwork. Every loop is shaped by a person, every colour is chosen with feeling, and every finished piece has a character all its own.</p>
          <div className="craft-facts"><div><span>01</span><h3>Slowly made</h3><p>Time is part of the design.</p></div><div><span>02</span><h3>Small batches</h3><p>Limited pieces, never mass produced.</p></div><div><span>03</span><h3>Made to feel</h3><p>Beautiful objects with emotion.</p></div></div>
        </div>
        <div className="craft-media">
          <Image src="/velona/making-tools.jpg" alt="Crochet tools and handmade squares at the VELONA making table" fill sizes="(max-width: 760px) 92vw, 42vw" />
          <span className="craft-badge">VELONA<br /><small>HANDMADE WORLD</small></span>
        </div>
      </section>

      <section className="world" aria-labelledby="world-title">
        <div className="world-heading page-shell"><div><p className="eyebrow">@velona_crochet</p><h2 id="world-title">Inside our <em>world.</em></h2></div><a className="text-link" href="https://www.instagram.com/velona_crochet/" target="_blank" rel="noreferrer">Follow on Instagram <ArrowUpRight aria-hidden="true" /></a></div>
        <div className="world-reel" aria-label="A moving edit from VELONA on Instagram">
          <div className="world-track">
            {[0, 1].map((setIndex) => (
              <div className="world-set" key={setIndex} aria-hidden={setIndex === 1}>
                {worldPosts.map((post, index) => (
                  <a
                    className="world-card"
                    href="https://www.instagram.com/velona_crochet/"
                    target="_blank"
                    rel="noreferrer"
                    key={`${setIndex}-${post.src}`}
                    tabIndex={setIndex === 1 ? -1 : undefined}
                    aria-label={`${post.label} on VELONA Instagram`}
                  >
                    <span className="world-media">
                      {post.kind === "image" ? (
                        <Image src={post.src} alt={setIndex === 0 ? post.alt : ""} fill sizes="(max-width: 760px) 58vw, 20vw" />
                      ) : (
                        <video autoPlay muted loop playsInline preload="metadata" poster={post.poster} aria-label={setIndex === 0 ? post.alt : undefined}>
                          <source src={post.src} type="video/mp4" />
                        </video>
                      )}
                      <span className="world-post-mark" aria-hidden="true">{post.kind === "video" ? "Reel" : "Post"}</span>
                    </span>
                    <span className="world-caption"><small>{String(index + 1).padStart(2, "0")}</small>{post.label}</span>
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wholesale wholesale-home" aria-labelledby="wholesale-title">
        <div className="page-shell wholesale-home-grid">
          <div className="wholesale-home-heading">
            <p className="eyebrow">For thoughtful retailers</p>
            <h2 id="wholesale-title">Bring our world<br /><em>to yours.</em></h2>
          </div>
          <div className="wholesale-home-copy">
            <p>A considered wholesale edit for boutiques and spaces that believe handmade pieces should always feel personal.</p>
            <p className="wholesale-home-note">Small batches / Seasonal lines / Personal support</p>
            <Link className="text-link light" href="/wholesale">Discover wholesale <ArrowUpRight aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="newsletter" aria-labelledby="newsletter-title">
        <div className="newsletter-image"><Image src="/velona/bag-cocoa.jpg" alt="Cocoa VELONA crochet bag styled with a trench coat" fill sizes="(max-width: 760px) 100vw, 42vw" /></div>
        <div className="newsletter-inner"><p className="eyebrow">Notes from our handmade world</p><h2 id="newsletter-title">New drops,<br />workshops and <em>stories.</em></h2><p>Join us for first access to new pieces, behind-the-scenes moments and the occasional invitation.</p><NewsletterForm /></div>
      </section>
      <Footer />
    </main>
  );
}
