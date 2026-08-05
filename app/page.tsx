import { ArrowDown, ArrowRight } from "lucide-react";
import Image from "next/image";
import { CollectionCard, ProductCard } from "@/components/cards";
import { Footer } from "@/components/footer";
import { NewsletterForm, WholesaleForm } from "@/components/forms";
import { Header } from "@/components/header";
import { getHomepageData } from "@/lib/convex";

export default async function Home() {
  const { collections, bestSellers } = await getHomepageData();

  return (
    <main id="top">
      <Header />

      <section className="hero" aria-labelledby="hero-title">
        <Image className="hero-image" src="/images/hero.jpg" alt="Model wearing an ivory hand-crocheted VELONA set" fill priority sizes="100vw" />
        <div className="hero-shade" />
        <div className="hero-content page-shell">
          <p className="hero-kicker">Handmade in Greece · Spring / Summer 2026</p>
          <h1 id="hero-title">A quiet expression<br />of the <em>handmade.</em></h1>
          <p className="hero-copy">Limited pieces, shaped stitch by stitch for a slower, more considered wardrobe.</p>
          <div className="hero-actions">
            <a className="button button-ivory" href="#best-sellers">Shop the collection <ArrowRight aria-hidden="true" /></a>
            <a className="text-link light" href="#wholesale">Explore wholesale <span>↗</span></a>
          </div>
        </div>
        <a href="#collections" className="hero-scroll" aria-label="Scroll to collections"><ArrowDown aria-hidden="true" /> Discover</a>
        <p className="hero-side-note">Made slowly · Worn often</p>
      </section>

      <section className="intro page-shell" aria-label="Brand introduction">
        <p className="section-number">01 / Collections</p>
        <p className="intro-statement">Crochet, reconsidered for the modern wardrobe. Each VELONA piece is an exercise in patience, form, and feeling.</p>
      </section>

      <section className="collections page-shell" id="collections" aria-labelledby="collections-title">
        <div className="section-heading">
          <div><p className="eyebrow">The collection</p><h2 id="collections-title">Made for a life<br /><em>well lived.</em></h2></div>
          <a className="text-link" href="#best-sellers">View all collections <span>↗</span></a>
        </div>
        <div className="collection-grid">
          {collections.map((collection, index) => <CollectionCard key={collection.slug} collection={collection} index={index} />)}
        </div>
      </section>

      <section className="best-sellers" id="best-sellers" aria-labelledby="best-sellers-title">
        <div className="page-shell">
          <div className="section-heading compact-heading">
            <div><p className="eyebrow">Most loved</p><h2 id="best-sellers-title">The <em>best sellers.</em></h2></div>
            <p className="section-aside">Small-batch pieces chosen again and again.</p>
          </div>
          <div className="product-grid">
            {bestSellers.map((product) => <ProductCard key={product.slug} product={product} />)}
          </div>
          <div className="center-action"><a className="button button-outline" href="#collections">Shop all pieces <ArrowRight aria-hidden="true" /></a></div>
        </div>
      </section>

      <section className="story" id="about" aria-labelledby="story-title">
        <div className="story-image-column">
          <Image src="/images/editorial.jpg" alt="VELONA crochet detailing in an editorial portrait" fill sizes="(max-width: 760px) 100vw, 50vw" />
          <p>Every loop holds the mark of its maker.</p>
        </div>
        <div className="story-content">
          <p className="eyebrow">Our story</p>
          <h2 id="story-title">Born from a love of<br /><em>making things last.</em></h2>
          <div className="story-copy">
            <p>VELONA began with a hook, a length of thread, and the belief that what we wear can carry meaning. Rooted in Mediterranean ease, our pieces bring an old craft into a new rhythm.</p>
            <p>We work slowly, in close partnership with skilled makers, to create garments with a human touch — each one subtly, beautifully its own.</p>
          </div>
          <a className="text-link light" href="#craftsmanship">Read our story <span>↗</span></a>
        </div>
      </section>

      <section className="craft page-shell" id="craftsmanship" aria-labelledby="craft-title">
        <div className="craft-image-wrap">
          <Image src="/images/craft-hands.jpg" alt="Hands forming crochet stitches with natural yarn" fill sizes="(max-width: 760px) 100vw, 45vw" />
          <div className="craft-stamp" aria-hidden="true"><span>VELONA</span><small>MADE BY HAND · GREECE</small></div>
        </div>
        <div className="craft-content">
          <p className="eyebrow">The art of the stitch</p>
          <h2 id="craft-title">Crafted by hand.<br /><em>Considered by nature.</em></h2>
          <p className="craft-lead">There are no shortcuts in crochet. Every stitch is made by hand, building texture and form one small gesture at a time.</p>
          <ol className="craft-steps">
            <li><span>01</span><div><h3>Natural fibers</h3><p>Breathable cottons and considered yarns chosen for feel, movement, and longevity.</p></div></li>
            <li><span>02</span><div><h3>Human hands</h3><p>Each piece passes through the hands of one maker from its first loop to its final finish.</p></div></li>
            <li><span>03</span><div><h3>Small quantities</h3><p>Produced in thoughtful runs that honor time, material, and the people behind the work.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="journal" id="journal" aria-labelledby="journal-title">
        <div className="journal-image"><Image src="/images/studio-still.jpg" alt="Crochet bag, yarn, and tools in the VELONA studio" fill sizes="(max-width: 760px) 100vw, 56vw" /></div>
        <div className="journal-copy">
          <p className="eyebrow">From the journal · No. 01</p>
          <h2 id="journal-title">Why slow is<br /><em>always in season.</em></h2>
          <p>A note on fewer, better things — and the quiet value of clothes made at a human pace.</p>
          <a className="text-link" href="#journal">Read the journal <span>↗</span></a>
        </div>
      </section>

      <section className="wholesale" id="wholesale" aria-labelledby="wholesale-title">
        <div className="page-shell wholesale-grid">
          <div className="wholesale-intro">
            <p className="eyebrow">For independent retailers</p>
            <h2 id="wholesale-title">Bring VELONA<br /><em>to your store.</em></h2>
            <p>We partner with thoughtful boutiques and concept stores that share our appreciation for craft, provenance, and slower fashion.</p>
            <ul><li>Small opening orders</li><li>Seasonal line sheets</li><li>Dedicated stockist support</li></ul>
          </div>
          <WholesaleForm />
        </div>
      </section>

      <section className="newsletter" aria-labelledby="newsletter-title">
        <div className="newsletter-inner page-shell">
          <p className="eyebrow">Notes from the studio</p>
          <h2 id="newsletter-title">New pieces, quiet stories,<br />and things worth <em>keeping.</em></h2>
          <NewsletterForm />
          <p className="newsletter-note">Occasional letters only. No noise, ever.</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
