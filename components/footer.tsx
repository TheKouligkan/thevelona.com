import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-marquee" aria-hidden="true"><span>MADE BY HAND · MADE TO FEEL · MADE TO LAST · </span><span>MADE BY HAND · MADE TO FEEL · MADE TO LAST · </span></div>
      <div className="footer-main page-shell">
        <div className="footer-brand">
          <Link href="/" className="footer-wordmark">VELONA</Link>
          <p>A small handmade world where tradition meets a new point of view.</p>
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
          <a href="https://www.instagram.com/velona_crochet/" target="_blank" rel="noreferrer">Instagram ↗</a>
          <p>@velona_crochet</p>
        </div>
      </div>
      <div className="footer-bottom page-shell"><p>© {new Date().getFullYear()} VELONA</p><p>Greece · Worldwide</p><p>Made with time and care.</p></div>
    </footer>
  );
}
