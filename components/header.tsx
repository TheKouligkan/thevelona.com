"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const navigation = [
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/collections" },
  { label: "About", href: "/about" },
  { label: "Wholesale", href: "/wholesale" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
];

export function Header({ tone = "light" }: { tone?: "light" | "dark" }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <div className={`announcement ${tone === "dark" ? "announcement-dark" : ""}`}>
        <p>Made slowly in Greece</p>
        <p className="announcement-center">Complimentary Greek shipping over €60</p>
        <a href="https://www.instagram.com/velona_crochet/" target="_blank" rel="noreferrer">@velona_crochet</a>
      </div>
      <header className={`site-header site-header-${tone}`}>
        <div className="header-inner">
          <button className="icon-button mobile-menu-button" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((value) => !value)}>
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navigation.slice(0, 3).map((item) => <Link key={item.label} href={item.href}>{item.label}</Link>)}
          </nav>
          <Link className="wordmark" href="/" aria-label="VELONA home">VELONA</Link>
          <nav className="desktop-nav desktop-nav-right" aria-label="Secondary navigation">
            {navigation.slice(3).map((item) => <Link key={item.label} href={item.href}>{item.label}</Link>)}
          </nav>
          <a className="header-instagram" href="https://www.instagram.com/velona_crochet/" target="_blank" rel="noreferrer" aria-label="VELONA on Instagram">Instagram</a>
        </div>
        <div className={`mobile-drawer ${open ? "is-open" : ""}`} aria-hidden={!open}>
          <nav aria-label="Mobile navigation">
            {navigation.map((item, index) => (
              <Link key={item.label} href={item.href} onClick={() => setOpen(false)}><span>{String(index + 1).padStart(2, "0")}</span>{item.label}</Link>
            ))}
          </nav>
          <div className="mobile-note"><p>Made by two generations.<br />Worn your way.</p><a href="https://www.instagram.com/velona_crochet/" target="_blank" rel="noreferrer">Instagram <ArrowUpRight aria-hidden="true" /></a></div>
        </div>
      </header>
    </>
  );
}
