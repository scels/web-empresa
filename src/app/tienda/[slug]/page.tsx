import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getProductBySlug, products } from "@/lib/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  return (
    <div className="page-shell">
      <Link className="back-link" href="/tienda">
        <span aria-hidden="true">←</span> Volver a las piezas
      </Link>
      <article className="product-detail">
        <div className="product-detail__image">
          <Image
            alt={product.imageAlt}
            fill
            priority
            sizes="(max-width: 760px) 100vw, 55vw"
            src={product.image}
            style={{ objectPosition: product.imagePosition ?? "center" }}
          />
        </div>
        <div className="product-detail__copy">
          <p className="eyebrow">{product.category}</p>
          <h1>{product.name}</h1>
          <p className="product-detail__description">{product.description}</p>
          <p>
            Cada pieza se trabaja a mano, por eso las pequeñas variaciones de
            forma y esmalte forman parte de su carácter.
          </p>
          <Link className="button button--dark" href="/contact">
            Consultar esta pieza <span aria-hidden="true">↗</span>
          </Link>
          <p className="product-detail__note">
            Escríbeme para consultar disponibilidad y próximos encargos.
          </p>
        </div>
      </article>
    </div>
  );
}