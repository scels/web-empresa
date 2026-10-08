import Link from "next/link";

import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { CategoryLinks } from "@/components/store/CategoryLinks";
import { dictionaries, localizedPath, type Locale } from "@/lib/i18n/dictionaries";
import { getCategories } from "@/sanity/lib/data";

type HeaderProps = {
  locale: Locale;
};

export async function Header({ locale }: HeaderProps) {
  const copy = dictionaries[locale];
  const categories = await getCategories();

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link
          aria-label={`${copy.site.brand}, ${copy.navigation.home}`}
          className="wordmark"
          href={localizedPath(locale)}
        >
          <span aria-hidden="true" className="wordmark__mark">XC</span>
          <span>{copy.site.brand}</span>
        </Link>
        <div className="header-tools">
          <nav aria-label={copy.navigation.label} className="main-nav">
            <div className="nav-dropdown">
              <Link
                className="nav-dropdown__trigger"
                href={localizedPath(locale, "tienda")}
              >
                {copy.navigation.pieces}
              </Link>
              <div
                aria-label={copy.navigation.categories}
                className="nav-dropdown__menu"
                role="group"
              >
                <CategoryLinks categories={categories} locale={locale} />
              </div>
            </div>
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

