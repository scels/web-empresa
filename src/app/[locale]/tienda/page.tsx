import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ProductCard } from "@/components/store/ProductCard";
import {
  dictionaries,
  isLocale,
  localizedPath,
  type Locale,
} from "@/lib/i18n/dictionaries";
import { getCategories, getProducts } from "@/sanity/lib/data";
import { getLocalizedValue } from "@/sanity/lib/localized";

type StorePageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: StorePageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  return {
    title: dictionaries[locale].shop.title,
    description: dictionaries[locale].shop.intro,
  };
}

export default async function StorePage({ params }: StorePageProps) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();

  const locale: Locale = rawLocale;
  const copy = dictionaries[locale];
  const [products, categories] = await Promise.all([getProducts(), getCategories()]);

  return (
    <div className="page-shell">
      <section className="page-intro">
        <p className="eyebrow">{copy.shop.eyebrow}</p>
        <h1>{copy.shop.title}</h1>
        <p>{copy.shop.intro}</p>
      </section>
      {categories.length ? (
        <nav aria-label={copy.navigation.categories} className="category-links">
          {categories.map((category) => (
            <Link
              href={localizedPath(locale, `tienda/categoria/${category.slug}`)}
              key={category.slug}
            >
              {getLocalizedValue(category.name, locale)}
            </Link>
          ))}
        </nav>
      ) : null}
      <section aria-label={copy.shop.collectionAlt} className="catalog-section">
        <div className="catalog-toolbar">
          <span>
            {products.length} {copy.shop.itemCount}
          </span>
          <span>{copy.shop.note}</span>
        </div>
        {products.length ? (
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard key={product.slug} locale={locale} product={product} />
            ))}
          </div>
        ) : (
          <p>{copy.shop.emptyCatalog}</p>
        )}
      </section>
    </div>
  );
}