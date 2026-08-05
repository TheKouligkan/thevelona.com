import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export const metadata: Metadata = { title: "Journal", description: "Stories, workshops, colour notes and behind-the-scenes moments from VELONA." };
const entries = [
  { title: "Why every stitch matters", label: "Craft · 5 min", image: "/velona/stitch-closeup.jpg", copy: "A closer look at the small gestures that give handmade crochet its character." },
  { title: "A sunny workshop day", label: "Community · 3 min", image: "/velona/workshop-day.jpg", copy: "Yarn, flowers, conversation and the pleasure of learning something with your hands." },
  { title: "Choosing a colour story", label: "Studio notes · 4 min", image: "/velona/yarn-selection.jpg", copy: "How a palette begins—and why the person who will wear it is always part of the process." },
];
export default function JournalPage() { return <main className="inner-main"><Header tone="dark" /><section className="inner-hero"><div className="page-shell"><p className="eyebrow">Notes from our handmade world</p><h1>The VELONA<br /><em>journal.</em></h1><p>Studio stories, care notes, workshop moments and a closer look at the hands behind the pieces.</p></div></section><section className="inner-section page-shell"><div className="journal-grid">{entries.map((entry) => <article className="journal-card" key={entry.title}><div className="journal-card-image"><Image src={entry.image} alt="" fill sizes="(max-width: 760px) 100vw, 33vw" /></div><p className="eyebrow">{entry.label}</p><h2>{entry.title}</h2><p>{entry.copy}</p></article>)}</div></section><Footer /></main>; }
