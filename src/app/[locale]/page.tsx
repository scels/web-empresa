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
import { getProducts, getSiteContent } from "@/sanity/lib/data";
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
  const products = await getProducts();
  const siteContent = await getSiteContent();
  const featuredProducts = products.filter((product) => product.featured);
  const homeProducts = (featuredProducts.length ? featuredProducts : products).slice(0, 3);
  const heroImage = siteContent?.homeHeroImage?.url
    ? siteContent.homeHeroImage
    : homeProducts[0]?.images[0];
  const storyImage = siteContent?.homeStoryImage?.url
    ? siteContent.homeStoryImage
    : homeProducts[1]?.images[0];

  return (
    <>
      <section className="hero">
        {heroImage?.url ? (
          <Image
            alt={getLocalizedValue(heroImage.alt, locale) || copy.home.heroAlt}
            className="hero__image"
            fill
            loading="eager"
            sizes="100vw"
            src={heroImage.url}
          />
        ) : null}
        <div className="hero__veil" />
        <div className="hero__content">
          <p className="hero__kicker">
            {getLocalizedValue(siteContent?.homeHeroKicker, locale) || copy.home.kicker}
          </p>
          <h1>
            {getLocalizedValue(siteContent?.homeHeroTitle, locale) || copy.home.title}
          </h1>
          <p>
            {getLocalizedValue(siteContent?.homeHeroIntro, locale) || copy.home.intro}
          </p>
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
        <h2>
          {getLocalizedValue(siteContent?.homeWorkshopTitle, locale) ||
            copy.home.workshopTitle}
        </h2>
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
          {storyImage?.url ? (
            <Image
              alt={getLocalizedValue(storyImage.alt, locale) || copy.home.storyAlt}
              fill
              sizes="(max-width: 760px) 100vw, 50vw"
              src={storyImage.url}
            />
          ) : null}
        </div>
        <div className="studio-note__copy">
          <p className="eyebrow">
            {getLocalizedValue(siteContent?.homeStoryEyebrow, locale) ||
              copy.home.storyEyebrow}
          </p>
          <h2>
            {getLocalizedValue(siteContent?.homeStoryTitle, locale) ||
              copy.home.storyTitle}
          </h2>
          <p>
            {getLocalizedValue(siteContent?.homeStoryBody, locale) ||
              copy.home.storyBody}
          </p>
          <Link className="text-link" href={localizedPath(locale, "taller")}>
            {copy.home.storyLink} <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </>
  );
}