"use client";

import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { useEffect, useState } from "react";

const navigation = ["Shop", "Collections", "About", "Wholesale", "Journal", "Contact"];

const anchors: Record<string, string> = {
  Shop: "#best-sellers",
  Collections: "#collections",
  About: "#about",
  Wholesale: "#wholesale",
  Journal: "#journal",
  Contact: "#contact",
};

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="header-inner">
        <button
          className="icon-button mobile-menu-button"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.slice(0, 3).map((item) => (
            <a key={item} href={anchors[item]}>{item}</a>
          ))}
        </nav>

        <a className="wordmark" href="#top" aria-label="VELONA home">VELONA</a>

        <nav className="desktop-nav desktop-nav-right" aria-label="Secondary navigation">
          {navigation.slice(3).map((item) => (
            <a key={item} href={anchors[item]}>{item}</a>
          ))}
        </nav>

        <div className="header-actions">
          <a className="icon-button" href="#best-sellers" aria-label="Search products">
            <Search aria-hidden="true" />
          </a>
          <a className="icon-button" href="#best-sellers" aria-label="View shopping bag">
            <ShoppingBag aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className={`mobile-drawer ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <nav aria-label="Mobile navigation">
          {navigation.map((item, index) => (
            <a key={item} href={anchors[item]} onClick={() => setOpen(false)}>
              <span>{String(index + 1).padStart(2, "0")}</span>{item}
            </a>
          ))}
        </nav>
        <p>Slowly made in Greece<br />for everywhere life takes you.</p>
      </div>
    </header>
  );
}
