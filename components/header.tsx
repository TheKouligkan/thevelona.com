"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
  const isCurrent = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

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
            {navigation.slice(0, 3).map((item) => <Link key={item.label} href={item.href} className={isCurrent(item.href) ? "is-current" : undefined} aria-current={isCurrent(item.href) ? "page" : undefined}>{item.label}</Link>)}
          </nav>
          <Link className="wordmark brand-logo" href="/" aria-label="VELONA home">
            <Image
              className="brand-logo-image"
              src="/velona/velona-wordmark.png"
              alt=""
              width={1912}
              height={823}
              sizes="(max-width: 480px) 128px, (max-width: 760px) 138px, 178px"
              loading="eager"
            />
          </Link>
          <nav className="desktop-nav desktop-nav-right" aria-label="Secondary navigation">
            {navigation.slice(3).map((item) => <Link key={item.label} href={item.href} className={isCurrent(item.href) ? "is-current" : undefined} aria-current={isCurrent(item.href) ? "page" : undefined}>{item.label}</Link>)}
          </nav>
          <a className="header-instagram" href="https://www.instagram.com/velona_crochet/" target="_blank" rel="noreferrer" aria-label="VELONA on Instagram">Instagram</a>
        </div>
        <div className={`mobile-drawer ${open ? "is-open" : ""}`} aria-hidden={!open}>
          <nav aria-label="Mobile navigation">
            {navigation.map((item, index) => (
              <Link key={item.label} href={item.href} className={isCurrent(item.href) ? "is-current" : undefined} aria-current={isCurrent(item.href) ? "page" : undefined} onClick={() => setOpen(false)}><span>{String(index + 1).padStart(2, "0")}</span>{item.label}</Link>
            ))}
          </nav>
          <div className="mobile-note"><p>Girl with grandma hobbies.<br />Crochet inspired by nature.</p><a href="https://www.instagram.com/velona_crochet/" target="_blank" rel="noreferrer">Instagram <ArrowUpRight aria-hidden="true" /></a></div>
        </div>
      </header>
    </>
  );
}
