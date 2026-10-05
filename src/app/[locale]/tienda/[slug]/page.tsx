import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  dictionaries,
  isLocale,
  localizedPath,
  type Locale,
} from "@/lib/i18n/dictionaries";
import { getProductBySlug, getProducts } from "@/sanity/lib/data";
import { getLocalizedValue } from "@/sanity/lib/localized";

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale)) return {};

  const product = await getProductBySlug(slug);
  if (!product) return {};

  return {
    title: getLocalizedValue(product.name, rawLocale),
    description: getLocalizedValue(product.description, rawLocale),
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
  const product = await getProductBySlug(slug);

  if (!product) notFound();

  const name = getLocalizedValue(product.name, locale);
  const description = getLocalizedValue(product.description, locale);
  const mainImage = product.images[0];
  const formatPrice = (price: number) =>
    new Intl.NumberFormat(locale, {
      style: "currency",
      currency: "EUR",
    }).format(price);

  return (
    <div className="page-shell">
      <Link className="back-link" href={localizedPath(locale, "tienda")}>
        <span aria-hidden="true">←</span> {copy.product.back}
      </Link>
      <article className="product-detail">
        <div className="product-detail__image">
          {mainImage?.url ? (
            <Image
              alt={getLocalizedValue(mainImage.alt, locale)}
              fill
              priority
              sizes="(max-width: 760px) 100vw, 55vw"
              src={mainImage.url}
            />
          ) : null}
        </div>
        <div className="product-detail__copy">
          <p className="eyebrow">
            {product.category
              ? `${getLocalizedValue(product.category.name, locale)} · `
              : ""}
            {copy.product.status[product.status]}
          </p>
          <h1>{name}</h1>
          <p className="product-detail__description">
            {description}
          </p>
          {product.price !== null ? (
            <p>
              <strong>{copy.product.price}:</strong> {formatPrice(product.price)}
            </p>
          ) : null}
          {product.dimensions ? (
            <p>
              <strong>{copy.product.dimensions}:</strong> {product.dimensions}
            </p>
          ) : null}
          {product.material ? (
            <p>
              <strong>{copy.product.material}:</strong>{" "}
              {getLocalizedValue(product.material, locale)}
            </p>
          ) : null}
          {product.technique ? (
            <p>
              <strong>{copy.product.technique}:</strong>{" "}
              {getLocalizedValue(product.technique, locale)}
            </p>
          ) : null}
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