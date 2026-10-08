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
import { getCategories, getProducts } from "@/sanity/lib/data";
import { getLocalizedValue } from "@/sanity/lib/localized";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;

  if (!isLocale(rawLocale)) notFound();

  const locale: Locale = rawLocale;
  const copy = dictionaries[locale];
  const [products, categories] = await Promise.all([getProducts(), getCategories()]);
  const featuredProducts = products.filter((product) => product.featured);
  const homeProducts = (featuredProducts.length ? featuredProducts : products).slice(0, 3);

  return (
    <>
      <section className="hero">
        <Image
          alt={copy.home.heroAlt}
          className="hero__image"
          fill
          loading="eager"
          sizes="100vw"
          src={copy.home.heroImage}
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

      {categories.length ? (
        <section className="home-categories section-wrap">
          <div className="home-categories__intro">
            <p className="eyebrow">{copy.navigation.categories}</p>
            <h2>{copy.home.categoriesTitle}</h2>
            <p>{copy.home.categoriesIntro}</p>
          </div>
          <div className="home-categories__grid">
            {categories.map((category) => {
              const product = products.find((piece) =>
                piece.category?.slug === category.slug ||
                categories.find((entry) => entry.slug === piece.category?.slug)?.parent?.slug === category.slug,
              );
              const image = product?.images.find((item) => item.url);
              const name = getLocalizedValue(category.name, locale);
              const description = getLocalizedValue(category.description, locale);

              return (
                <Link
                  className="home-category"
                  href={localizedPath(locale, `tienda/categoria/${category.slug}`)}
                  key={category.slug}
                >
                  {image?.url ? (
                    <div className="home-category__image">
                      <Image
                        alt={getLocalizedValue(image.alt, locale) || name}
                        fill
                        sizes="(max-width: 900px) 50vw, 25vw"
                        src={image.url}
                      />
                    </div>
                  ) : null}
                  <div className="home-category__heading">
                    <h3>{name}</h3>
                    <span aria-hidden="true">↗</span>
                  </div>
                  {description ? <p>{description}</p> : null}
                </Link>
              );
            })}
          </div>
        </section>
      ) : null}

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
        {homeProducts.length ? (
          <div className="product-grid">
            {homeProducts.map((product) => (
              <ProductCard key={product.slug} locale={locale} product={product} />
            ))}
          </div>
        ) : (
          <p>{copy.shop.emptyCatalog}</p>
        )}
      </section>

      <section className="studio-note">
        <div className="studio-note__image">
          <Image
            alt={copy.home.storyAlt}
            fill
            sizes="(max-width: 760px) 100vw, 50vw"
            src={copy.home.storyImage}
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