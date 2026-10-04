import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProductCard } from "@/components/store/ProductCard";
import {
  dictionaries,
  isLocale,
  type Locale,
} from "@/lib/i18n/dictionaries";
import {
  getCategories as getSanityCategories,
  getCategoryBySlug,
  getProductsByCategory,
} from "@/sanity/lib/data";
import { getLocalizedValue } from "@/sanity/lib/localized";

type CategoryPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  const categories = await getSanityCategories();
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale)) return {};

  const category = await getCategoryBySlug(slug);
  if (!category) return {};

  return {
    title: getLocalizedValue(category.name, rawLocale),
    description: dictionaries[rawLocale].shop.categoryIntro,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale)) notFound();

  const locale: Locale = rawLocale;
  const copy = dictionaries[locale];
  const category = await getCategoryBySlug(slug);
  if (!category) notFound();

  const categoryName = getLocalizedValue(category.name, locale);
  const categoryProducts = await getProductsByCategory(slug);

  return (
    <div className="page-shell">
      <section className="page-intro">
        <p className="eyebrow">{copy.shop.eyebrow}</p>
        <h1>{categoryName}</h1>
        <p>{copy.shop.categoryIntro}</p>
      </section>
      <section
        aria-label={categoryName}
        className="catalog-section"
      >
        {categoryProducts.length ? (
          <div className="product-grid">
            {categoryProducts.map((product) => (
              <ProductCard key={product.slug} locale={locale} product={product} />
            ))}
          </div>
        ) : (
          <p>{copy.shop.empty}</p>
        )}
      </section>
    </div>
  );
}