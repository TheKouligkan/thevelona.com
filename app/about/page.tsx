import type { Metadata } from "next";
import Image from "next/image";
import { BrandPrinciples, PageOutro } from "@/components/editorial";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export const metadata: Metadata = { title: "Our Story", description: "Meet Akrivi, her grandmother and the two-generation story behind VELONA." };

export default function AboutPage() {
  return (
    <main className="inner-main page-about">
      <Header tone="dark" />
      <section className="inner-hero"><div className="page-shell inner-hero-split"><div><p className="eyebrow">A family story</p><h1>From her hands<br /><em>to mine.</em></h1><p>VELONA brings together a grandmother’s knowledge and her granddaughter’s modern point of view.</p></div><div className="inner-hero-image"><Image src="/velona/craft-squares.jpg" alt="Crochet squares handmade for a VELONA jacket" fill priority sizes="(max-width: 760px) 100vw, 40vw" /></div></div></section>
      <section className="inner-section"><div className="page-shell prose-grid"><p className="big-copy">“We are fortunate to live the dream she carried from a young age, together.”</p><div className="prose-columns"><p>I’m Akrivi, named like my beloved grandmother. From a young age, she dreamed of turning her love for crochet into something she could share with the world. Today, we are lucky enough to live that dream side by side.</p><p>With her experience, patience and passion, and my modern ideas, we bring the traditional and the contemporary closer together. That exchange is at the heart of every VELONA piece.</p><p>Everything is made by hand, with care and attention to detail. Our aim is not only to make beautiful things, but to create feelings: pieces that accompany special moments and help the person wearing them feel unique.</p></div></div></section>
      <section className="legacy-section page-shell"><div className="legacy-images"><div><Image src="/velona/making-tools.jpg" alt="Crochet tools at the VELONA making table" fill sizes="(max-width: 760px) 100vw, 36vw" /></div><div><Image src="/velona/stitch-closeup.jpg" alt="Close detail of handmade VELONA stitches" fill sizes="(max-width: 760px) 60vw, 22vw" /></div></div><div className="legacy-copy"><p className="eyebrow">What carries forward</p><h2>Knowledge becomes <em>identity.</em></h2><p>VELONA is a conversation between generations. The technique may be inherited, but every new colour, proportion and combination moves the story forward.</p><BrandPrinciples /></div></section>
      <section className="drop-banner"><div className="drop-image"><Image src="/velona/clutch-work.jpg" alt="A VELONA crochet workshop surrounded by handmade clutches and flowers" fill sizes="(max-width: 760px) 100vw, 55vw" /></div><div className="drop-copy"><p className="eyebrow">The wider circle</p><h2>Learning,<br />making,<br /><em>sharing.</em></h2><p>VELONA also comes alive through workshops, pop-ups and the community around the craft. Handmade knowledge grows when it is passed on.</p></div></section>
      <PageOutro eyebrow="Wear the story" title="Discover the current VELONA edit." copy="Explore handmade signatures across bags, jackets, swimwear and accessories." href="/shop" label="Shop VELONA" image="/velona/jacket-brown.jpg" imageAlt="Brown and cream VELONA crochet jacket" />
      <Footer />
    </main>
  );
}
