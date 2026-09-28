import Image from "next/image";
import Link from "next/link";

import type { Product } from "@/lib/products";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="product-card">
      <Link
        aria-label={`Descubrir ${product.name}`}
        className="product-card__image"
        href={`/tienda/${product.slug}`}
      >
        <Image
          alt={product.imageAlt}
          fill
          sizes="(max-width: 700px) 100vw, (max-width: 1050px) 50vw, 33vw"
          src={product.image}
          style={{ objectPosition: product.imagePosition ?? "center" }}
        />
        {product.label ? (
          <span className="product-card__label">{product.label}</span>
        ) : null}
      </Link>
      <div className="product-card__details">
        <div>
          <p className="eyebrow">{product.category}</p>
          <h3>
            <Link href={`/tienda/${product.slug}`}>{product.name}</Link>
          </h3>
        </div>
        <Link
          aria-label={`Ver ${product.name}`}
          className="round-link"
          href={`/tienda/${product.slug}`}
        >
          <span aria-hidden="true">↗</span>
        </Link>
      </div>
      <p className="product-card__description">{product.description}</p>
    </article>
  );
}