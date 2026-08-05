import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-marquee" aria-hidden="true"><span>GIRL WITH GRANDMA HOBBIES / CROCHET INSPIRED BY NATURE / MADE SLOWLY IN GREECE / </span><span>GIRL WITH GRANDMA HOBBIES / CROCHET INSPIRED BY NATURE / MADE SLOWLY IN GREECE / </span></div>
      <div className="footer-main page-shell">
        <div className="footer-brand">
          <Link href="/" className="footer-wordmark">velona</Link>
          <p>A girl, her grandmother, and a small handmade world inspired by nature.</p>
        </div>
        <div className="footer-column">
          <p className="footer-label">Explore</p>
          <Link href="/shop">Shop</Link><Link href="/collections">Collections</Link><Link href="/about">Our story</Link><Link href="/journal">Journal</Link>
        </div>
        <div className="footer-column">
          <p className="footer-label">For you</p>
          <Link href="/wholesale">Wholesale</Link><Link href="/contact">Shipping & returns</Link><Link href="/contact">Care guide</Link><Link href="/contact">Contact</Link>
        </div>
        <div className="footer-column footer-social">
          <p className="footer-label">Follow the thread</p>
          <a className="footer-social-link" href="https://www.instagram.com/velona_crochet/" target="_blank" rel="noreferrer">Instagram <ArrowUpRight aria-hidden="true" /></a>
          <p>@velona_crochet</p>
        </div>
      </div>
      <div className="footer-bottom page-shell"><p>© {new Date().getFullYear()} VELONA</p><p>Greece / Worldwide</p><p>Made with time and care.</p></div>
    </footer>
  );
}
