import Image from "next/image";
import Link from "next/link";

import { ProductCard } from "@/components/store/ProductCard";
import { products } from "@/lib/products";

export default function Home() {
  return (
    <>
      <section className="hero">
        <Image
          alt="Cerámica artesanal creada en el taller"
          className="hero__image"
          fill
          loading="eager"
          sizes="100vw"
          src={products[0].image}
        />
        <div className="hero__veil" />
        <div className="hero__content">
          <p className="hero__kicker">Cerámica hecha despacio · Desde el taller</p>
          <h1>La belleza de lo que no se repite.</h1>
          <p>
            Piezas de barro hechas a mano para acompañar los pequeños rituales
            de cada día.
          </p>
          <Link className="button button--light" href="/tienda">
            Explorar las piezas <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <span className="hero__index">01 / Hecho en el taller</span>
      </section>

      <section className="home-intro section-wrap">
        <p className="eyebrow">El taller Libélula</p>
        <h2>La huella de las manos también es parte del diseño.</h2>
        <Link className="text-link" href="/taller">
          Conoce el taller <span aria-hidden="true">↗</span>
        </Link>
      </section>

      <section className="featured-section section-wrap">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Una pequeña selección</p>
            <h2>Objetos para quedarse.</h2>
          </div>
          <Link className="text-link" href="/tienda">
            Ver todas las piezas <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section className="studio-note">
        <div className="studio-note__image">
          <Image
            alt="Detalle de una pieza artesanal de cerámica"
            fill
            sizes="(max-width: 760px) 100vw, 50vw"
            src={products[1].image}
            style={{ objectPosition: products[1].imagePosition ?? "center" }}
          />
        </div>
        <div className="studio-note__copy">
          <p className="eyebrow">De la tierra a tus manos</p>
          <h2>El tiempo también se queda en la pieza.</h2>
          <p>
            Barro, agua, fuego y muchas decisiones pequeñas. Así nace cada
            objeto: sin prisa, cerca de la materia y lejos de la perfección en
            serie.
          </p>
          <Link className="text-link" href="/taller">
            Asómate al proceso <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </>
  );
}
