import type { Metadata } from "next";

import { ProductCard } from "@/components/store/ProductCard";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Piezas | Libélula Cerámica",
  description:
    "Descubre piezas de cerámica artesanal hechas a mano en el taller Libélula.",
};

export default function TiendaPage() {
  return (
    <div className="page-shell">
      <section className="page-intro">
        <p className="eyebrow">Objetos con tiempo dentro</p>
        <h1>Piezas para vivirlas.</h1>
        <p>
          Cerámica hecha a mano, en series pequeñas y con espacio para que cada
          pieza encuentre su propia forma.
        </p>
      </section>

      <section aria-label="Colección de cerámica" className="catalog-section">
        <div className="catalog-toolbar">
          <span>{products.length} piezas</span>
          <span>Modeladas y esmaltadas en el taller</span>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}