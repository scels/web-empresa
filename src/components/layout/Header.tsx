import Link from "next/link";

import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { dictionaries, localizedPath, type Locale } from "@/lib/i18n/dictionaries";
import { getCategories } from "@/lib/products";

type HeaderProps = {
  locale: Locale;
};

export function Header({ locale }: HeaderProps) {
  const copy = dictionaries[locale];
  const categories = getCategories();

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link
          aria-label={`${copy.site.brand}, ${copy.navigation.home}`}
          className="wordmark"
          href={localizedPath(locale)}
        >
          <span aria-hidden="true" className="wordmark__mark">l.</span>
          <span>{copy.site.brand}</span>
        </Link>
        <div className="header-tools">
          <nav aria-label={copy.navigation.label} className="main-nav">
            <details className="nav-dropdown">
              <summary>{copy.navigation.pieces}</summary>
              <div
                aria-label={copy.navigation.categories}
                className="nav-dropdown__menu"
                role="group"
              >
                <Link href={localizedPath(locale, "tienda")}>
                  {copy.navigation.allPieces}
                </Link>
                {categories.map((category) => (
                  <Link
                    href={localizedPath(
                      locale,
                      `tienda/categoria/${category.slug}`,
                    )}
                    key={category.slug}
                  >
                    {category.name[locale]}
                  </Link>
                ))}
              </div>
            </details>
            <Link href={localizedPath(locale, "taller")}>
              {copy.navigation.workshop}
            </Link>
            <Link href={localizedPath(locale, "contact")}>
              {copy.navigation.contact}
            </Link>
          </nav>
          <LanguageSwitcher locale={locale} label={copy.navigation.language} />
        </div>
      </div>
    </header>
  );
}

