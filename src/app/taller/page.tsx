import Image from "next/image";
import Link from "next/link";

import { products } from "@/lib/products";

export const metadata = {
  title: "El taller",
  description:
    "Conoce el proceso pausado y manual detrás de cada pieza de Libélula Cerámica.",
};

export default function TallerPage() {
  return (
    <div className="page-shell">
      <section className="page-intro page-intro--wide">
        <p className="eyebrow">El taller Libélula</p>
        <h1>Hecho con las manos. Y con tiempo.</h1>
        <p>
          Un espacio pequeño para trabajar con barro y dejar que el material
          también tome parte en el resultado.
        </p>
      </section>
      <section className="story-layout">
        <div className="story-layout__image">
          <Image
            alt="Cerámica artesanal en distintas etapas de elaboración"
            fill
            priority
            sizes="(max-width: 760px) 100vw, 54vw"
            src={products[0].image}
          />
        </div>
        <div className="story-layout__copy">
          <p className="eyebrow">Una forma de hacer</p>
          <h2>El barro nunca sale exactamente igual dos veces.</h2>
          <p>
            Cada objeto comienza con una idea y va encontrando su forma entre
            las manos, el torno y el fuego. Las marcas sutiles, los cambios de
            tono y las pequeñas diferencias no son defectos: cuentan cómo se
            hizo.
          </p>
          <p>
            Libélula es una invitación a rodearse de objetos cotidianos con
            carácter propio, pensados para usarse y para durar.
          </p>
          <Link className="text-link" href="/tienda">
            Descubrir las piezas <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
      <section className="process-strip" aria-label="El proceso cerámico">
        <div>
          <span>01</span>
          <h3>La materia</h3>
          <p>Elegir el barro y preparar cada pieza.</p>
        </div>
        <div>
          <span>02</span>
          <h3>Las manos</h3>
          <p>Modelar, dejar secar y encontrar la forma.</p>
        </div>
        <div>
          <span>03</span>
          <h3>El fuego</h3>
          <p>Esmaltar y esperar la transformación.</p>
        </div>
      </section>
    </div>
  );
}