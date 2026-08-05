import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { PageOutro } from "@/components/editorial";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export const metadata: Metadata = { title: "Contact", description: "Contact VELONA for orders, press, collaborations, care and shipping questions." };

export default function ContactPage() {
  return (
    <main className="inner-main page-contact">
      <Header tone="dark" />
      <section className="inner-hero"><div className="page-shell inner-hero-split"><div><p className="eyebrow">Come say hello</p><h1>We’d love to<br /><em>hear from you.</em></h1><p>Questions about a piece, a collaboration or caring for your VELONA? Send us a note and we will come back to you personally.</p></div><div className="inner-hero-image"><Image src="/velona/making-tools.jpg" alt="Crochet tools and handmade squares at the VELONA making table" fill sizes="(max-width: 760px) 100vw, 40vw" /></div></div></section>
      <section className="inner-section page-shell"><div className="contact-grid"><div className="contact-block"><p className="eyebrow">General and orders</p><h2>Start a conversation.</h2><p>For product questions, custom colour conversations, press and collaborations.</p><a href="mailto:hello@thevelona.com">hello@thevelona.com</a></div><div className="contact-block"><p className="eyebrow">Social</p><h2>Follow the making.</h2><p>New pieces, studio moments, workshops and daily colour from our Instagram.</p><a href="https://www.instagram.com/velona_crochet/" target="_blank" rel="noreferrer">@velona_crochet <ArrowUpRight aria-hidden="true" /></a></div><div className="contact-block"><p className="eyebrow">Wholesale</p><h2>For your store.</h2><p>Retailers and concept spaces can use our dedicated wholesale inquiry.</p><a href="/wholesale">Wholesale inquiry <ArrowUpRight aria-hidden="true" /></a></div><div className="contact-block"><p className="eyebrow">Care</p><h2>Keep it beautiful.</h2><p>Store your crochet piece folded, avoid hanging heavy pieces, and hand wash gently in cool water when needed.</p></div></div></section>
      <section className="faq-section"><div className="page-shell faq-grid"><div><p className="eyebrow">A few useful notes</p><h2>Before you<br /><em>ask.</em></h2></div><div className="faq-list"><details><summary>Are VELONA pieces made to order?</summary><p>Many styles are released in small batches, while selected pieces and colours can begin with a direct conversation.</p></details><details><summary>Do you ship internationally?</summary><p>VELONA is based in Greece and can arrange international delivery. Contact us with your destination for current details.</p></details><details><summary>Can I request a specific colour?</summary><p>Colour availability depends on the piece and current yarn selection. Send us your idea and we will let you know what is possible.</p></details><details><summary>How should I care for crochet?</summary><p>Keep pieces folded, avoid unnecessary pulling, and gently hand wash in cool water when care is needed.</p></details></div></div></section>
      <PageOutro eyebrow="Explore before you write" title="Find the VELONA piece that feels like you." copy="Browse the current handmade edit, then contact us if you want to discuss a colour or detail." href="/shop" label="Shop the edit" image="/velona/clutch-ivory.jpg" imageAlt="Ivory VELONA crochet clutch" />
      <Footer />
    </main>
  );
}
