import Link from "next/link";

import { dictionaries, localizedPath, type Locale } from "@/lib/i18n/dictionaries";

type FooterProps = {
  locale: Locale;
};

export function Footer({ locale }: FooterProps) {
  const copy = dictionaries[locale];

  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <div>
          <Link
            aria-label={`${copy.site.brand}, ${copy.navigation.home}`}
            className="wordmark wordmark--footer"
            href={localizedPath(locale)}
          >
            <span aria-hidden="true" className="wordmark__mark">XC</span>
            <span>{copy.site.brand}</span>
          </Link>
          <p>{copy.footer.tagline}</p>
        </div>
        <nav aria-label={copy.navigation.footer} className="footer-nav">
          <Link href={localizedPath(locale, "tienda")}>
            {copy.navigation.pieces}
          </Link>
          <Link href={localizedPath(locale, "taller")}>
            {copy.navigation.workshop}
          </Link>
          <Link href={localizedPath(locale, "contact")}>
            {copy.navigation.contact}
          </Link>
        </nav>
      </div>
      <div className="site-footer__bottom">
        <span>© {new Date().getFullYear()} {copy.site.brand}</span>
        <span>{copy.footer.descriptor}</span>
      </div>
    </footer>
  );
}

