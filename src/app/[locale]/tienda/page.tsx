import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProductCard } from "@/components/store/ProductCard";
import {
  dictionaries,
  isLocale,
  type Locale,
} from "@/lib/i18n/dictionaries";
import { getProducts } from "@/sanity/lib/data";

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
  const products = await getProducts();

  return (
    <div className="page-shell">
      <section className="page-intro">
        <p className="eyebrow">{copy.shop.eyebrow}</p>
        <h1>{copy.shop.title}</h1>
        <p>{copy.shop.intro}</p>
      </section>
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