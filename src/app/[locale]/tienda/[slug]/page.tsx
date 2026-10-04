import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  dictionaries,
  isLocale,
  localizedPath,
  type Locale,
} from "@/lib/i18n/dictionaries";
import { getProductBySlug, products } from "@/lib/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale)) return {};

  const product = getProductBySlug(slug);
  if (!product) return {};

  return {
    title: product.name[rawLocale],
    description: product.description[rawLocale],
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale)) notFound();

  const locale: Locale = rawLocale;
  const copy = dictionaries[locale];
  const product = getProductBySlug(slug);

  if (!product) notFound();

  return (
    <div className="page-shell">
      <Link className="back-link" href={localizedPath(locale, "tienda")}>
        <span aria-hidden="true">←</span> {copy.product.back}
      </Link>
      <article className="product-detail">
        <div className="product-detail__image">
          <Image
            alt={product.imageAlt[locale]}
            fill
            priority
            sizes="(max-width: 760px) 100vw, 55vw"
            src={product.image}
            style={{ objectPosition: product.imagePosition ?? "center" }}
          />
        </div>
        <div className="product-detail__copy">
          <p className="eyebrow">{product.category.name[locale]}</p>
          <h1>{product.name[locale]}</h1>
          <p className="product-detail__description">
            {product.description[locale]}
          </p>
          <p>{copy.product.handmade}</p>
          <Link
            className="button button--dark"
            href={localizedPath(locale, "contact")}
          >
            {copy.product.inquire} <span aria-hidden="true">↗</span>
          </Link>
          <p className="product-detail__note">{copy.product.availability}</p>
        </div>
      </article>
    </div>
  );
}