import Link from "next/link";

export function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link aria-label="Libélula Cerámica, inicio" className="wordmark" href="/">
          <span aria-hidden="true" className="wordmark__mark">l.</span>
          <span>libélula<span className="wordmark__light"> cerámica</span></span>
        </Link>
        <nav aria-label="Navegación principal" className="main-nav">
          <Link href="/tienda">Piezas</Link>
          <Link href="/taller">El taller</Link>
          <Link href="/contact">Contacto</Link>
        </nav>
      </div>
    </header>
  );
}

