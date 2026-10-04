import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ProductCard } from "@/components/store/ProductCard";
import {
  dictionaries,
  isLocale,
  localizedPath,
  type Locale,
} from "@/lib/i18n/dictionaries";
import { products } from "@/lib/products";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;

  if (!isLocale(rawLocale)) notFound();

  const locale: Locale = rawLocale;
  const copy = dictionaries[locale];

  return (
    <>
      <section className="hero">
        <Image
          alt={copy.home.heroAlt}
          className="hero__image"
          fill
          loading="eager"
          sizes="100vw"
          src={products[0].image}
        />
        <div className="hero__veil" />
        <div className="hero__content">
          <p className="hero__kicker">{copy.home.kicker}</p>
          <h1>{copy.home.title}</h1>
          <p>{copy.home.intro}</p>
          <Link
            className="button button--light"
            href={localizedPath(locale, "tienda")}
          >
            {copy.home.explore} <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <span className="hero__index">{copy.home.heroIndex}</span>
      </section>

      <section className="home-intro section-wrap">
        <p className="eyebrow">{copy.home.workshopEyebrow}</p>
        <h2>{copy.home.workshopTitle}</h2>
        <Link className="text-link" href={localizedPath(locale, "taller")}>
          {copy.home.workshopLink} <span aria-hidden="true">↗</span>
        </Link>
      </section>

      <section className="featured-section section-wrap">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{copy.home.selection}</p>
            <h2>{copy.home.selectionTitle}</h2>
          </div>
          <Link className="text-link" href={localizedPath(locale, "tienda")}>
            {copy.home.allPieces} <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.slug} locale={locale} product={product} />
          ))}
        </div>
      </section>

      <section className="studio-note">
        <div className="studio-note__image">
          <Image
            alt={copy.home.storyAlt}
            fill
            sizes="(max-width: 760px) 100vw, 50vw"
            src={products[1].image}
            style={{ objectPosition: products[1].imagePosition ?? "center" }}
          />
        </div>
        <div className="studio-note__copy">
          <p className="eyebrow">{copy.home.storyEyebrow}</p>
          <h2>{copy.home.storyTitle}</h2>
          <p>{copy.home.storyBody}</p>
          <Link className="text-link" href={localizedPath(locale, "taller")}>
            {copy.home.storyLink} <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </>
  );
}