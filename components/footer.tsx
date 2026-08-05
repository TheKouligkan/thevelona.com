export function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-main page-shell">
        <div className="footer-brand">
          <a href="#top" className="footer-wordmark">VELONA</a>
          <p>Slow fashion, shaped by hand.<br />Athens · Greece</p>
        </div>
        <div className="footer-column">
          <p className="footer-label">Explore</p>
          <a href="#best-sellers">Shop</a>
          <a href="#collections">Collections</a>
          <a href="#about">Our story</a>
          <a href="#journal">Journal</a>
        </div>
        <div className="footer-column">
          <p className="footer-label">Information</p>
          <a href="#wholesale">Wholesale</a>
          <a href="#contact">Shipping & returns</a>
          <a href="#contact">Care guide</a>
          <a href="mailto:hello@thevelona.com">Contact</a>
        </div>
        <div className="footer-column footer-social">
          <p className="footer-label">Follow the thread</p>
          <a href="https://instagram.com" aria-label="VELONA on Instagram">Instagram ↗</a>
          <p>@thevelona</p>
        </div>
      </div>
      <div className="footer-bottom page-shell">
        <p>© {new Date().getFullYear()} VELONA</p>
        <div><a href="#contact">Privacy</a><a href="#contact">Terms</a></div>
        <p>Made slowly. Worn endlessly.</p>
      </div>
    </footer>
  );
}
