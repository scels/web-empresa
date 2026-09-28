import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <div>
          <Link className="wordmark wordmark--footer" href="/">
            <span aria-hidden="true" className="wordmark__mark">l.</span>
            <span>libélula<span className="wordmark__light"> cerámica</span></span>
          </Link>
          <p>Hecho a mano, pieza a pieza.</p>
        </div>
        <nav aria-label="Navegación del pie de página" className="footer-nav">
          <Link href="/tienda">Piezas</Link>
          <Link href="/taller">El taller</Link>
          <Link href="/contact">Contacto</Link>
          <a href="https://tallerlibelula.es/" rel="noreferrer" target="_blank">
            Web actual <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
      <div className="site-footer__bottom">
        <span>© {new Date().getFullYear()} Libélula Cerámica</span>
        <span>Cerámica artesanal</span>
      </div>
    </footer>
  );
}

