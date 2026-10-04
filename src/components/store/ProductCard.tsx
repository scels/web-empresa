import Image from "next/image";
import Link from "next/link";

import { dictionaries, localizedPath, type Locale } from "@/lib/i18n/dictionaries";
import type { Product } from "@/lib/products";

type ProductCardProps = {
  locale: Locale;
  product: Product;
};

export function ProductCard({ locale, product }: ProductCardProps) {
  const copy = dictionaries[locale];
  const productPath = localizedPath(locale, `tienda/${product.slug}`);

  return (
    <article className="product-card">
      <Link
        aria-label={`${copy.product.open} ${product.name[locale]}`}
        className="product-card__image"
        href={productPath}
      >
        <Image
          alt={product.imageAlt[locale]}
          fill
          sizes="(max-width: 700px) 100vw, (max-width: 1050px) 50vw, 33vw"
          src={product.image}
          style={{ objectPosition: product.imagePosition ?? "center" }}
        />
        {product.label ? (
          <span className="product-card__label">{product.label[locale]}</span>
        ) : null}
      </Link>
      <div className="product-card__details">
        <div>
          <p className="eyebrow">{product.category.name[locale]}</p>
          <h3>
            <Link href={productPath}>{product.name[locale]}</Link>
          </h3>
        </div>
        <Link
          aria-label={`${copy.product.view} ${product.name[locale]}`}
          className="round-link"
          href={productPath}
        >
          <span aria-hidden="true">↗</span>
        </Link>
      </div>
      <p className="product-card__description">
        {product.description[locale]}
      </p>
    </article>
  );
}