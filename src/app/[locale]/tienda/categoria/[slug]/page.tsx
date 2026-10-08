import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ProductCard } from "@/components/store/ProductCard";
import { CategoryLinks } from "@/components/store/CategoryLinks";
import {
  dictionaries,
  isLocale,
  localizedPath,
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
  const [categoryProducts, categories] = await Promise.all([
    getProductsByCategory(slug),
    getSanityCategories(),
  ]);
  const hasChildren = categories.some((entry) => entry.parent?.slug === slug);

  return (
    <div className="page-shell">
      {category.parent ? (
        <Link
          className="back-link"
          href={localizedPath(locale, `tienda/categoria/${category.parent.slug}`)}
        >
          <span aria-hidden="true">←</span>
          {getLocalizedValue(category.parent.name, locale)}
        </Link>
      ) : null}
      <section className="page-intro">
        <p className="eyebrow">{copy.shop.eyebrow}</p>
        <h1>{categoryName}</h1>
        <p>{copy.shop.categoryIntro}</p>
      </section>
      {hasChildren ? (
        <nav aria-label={copy.navigation.categories} className="category-links">
          <CategoryLinks categories={categories} locale={locale} parentSlug={slug} />
        </nav>
      ) : null}
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