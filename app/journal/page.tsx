import type { Metadata } from "next";
import Image from "next/image";
import { PageOutro } from "@/components/editorial";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export const metadata: Metadata = { title: "Journal", description: "Stories, workshops, colour notes and behind-the-scenes moments from VELONA." };
const entries = [
  { title: "Why every stitch matters", label: "Craft / 5 min", image: "/velona/stitch-closeup.jpg", copy: "A closer look at the small gestures that give handmade crochet its character." },
  { title: "The making table", label: "Community / 3 min", image: "/velona/making-tools.jpg", copy: "Yarn, conversation and the pleasure of learning something with your hands." },
  { title: "Choosing a colour story", label: "Studio notes / 4 min", image: "/velona/craft-squares.jpg", copy: "How a palette begins, and why the person who will wear it is always part of the process." },
];

export default function JournalPage() {
  const [featured, ...stories] = entries;
  return (
    <main className="inner-main page-journal">
      <Header tone="dark" />
      <section className="inner-hero"><div className="page-shell"><p className="eyebrow">Notes from our handmade world</p><h1>The VELONA<br /><em>journal.</em></h1><p>Studio stories, care notes, workshop moments and a closer look at the hands behind the pieces.</p></div></section>
      <section className="featured-story page-shell"><div className="featured-story-image"><Image src={featured.image} alt="Close-up of VELONA handmade stitches" fill priority sizes="(max-width: 760px) 100vw, 58vw" /></div><article><p className="eyebrow">{featured.label}</p><h2>{featured.title}</h2><p>{featured.copy}</p><span>Issue 01 / The craft</span></article></section>
      <section className="inner-section page-shell"><div className="page-heading-row"><div><p className="eyebrow">More from the studio</p><h2>Read <em>on.</em></h2></div><p>Colour, community and the everyday rituals behind VELONA.</p></div><div className="journal-grid journal-grid-two">{stories.map((entry) => <article className="journal-card" key={entry.title}><div className="journal-card-image"><Image src={entry.image} alt="" fill sizes="(max-width: 760px) 100vw, 45vw" /></div><p className="eyebrow">{entry.label}</p><h2>{entry.title}</h2><p>{entry.copy}</p></article>)}</div></section>
      <PageOutro eyebrow="See the story in motion" title="Follow the daily making on Instagram." copy="New pieces, workshop moments, colour studies and the people who wear VELONA." href="https://www.instagram.com/velona_crochet/" label="Visit Instagram" image="/velona/fringe-bag.jpg" imageAlt="Floral VELONA fringe bag" />
      <Footer />
    </main>
  );
}
