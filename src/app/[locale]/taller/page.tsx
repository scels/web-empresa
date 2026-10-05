import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  dictionaries,
  isLocale,
  localizedPath,
  type Locale,
} from "@/lib/i18n/dictionaries";
import { getProducts, getSiteContent } from "@/sanity/lib/data";
import { getLocalizedValue } from "@/sanity/lib/localized";

type WorkshopPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: WorkshopPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const siteContent = await getSiteContent();
  return {
    title:
      getLocalizedValue(siteContent?.workshopTitle, locale) ||
      dictionaries[locale].workshop.eyebrow,
    description:
      getLocalizedValue(siteContent?.workshopIntro, locale) ||
      dictionaries[locale].workshop.intro,
  };
}

export default async function WorkshopPage({ params }: WorkshopPageProps) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();

  const locale: Locale = rawLocale;
  const copy = dictionaries[locale];
  const siteContent = await getSiteContent();
  const firstProduct = (await getProducts())[0];
  const workshopImage = siteContent?.workshopImage?.url
    ? siteContent.workshopImage
    : firstProduct?.images[0];
  const workshopSteps = siteContent?.workshopSteps?.length
    ? siteContent.workshopSteps.map((step) => ({
        title: getLocalizedValue(step.title, locale),
        body: getLocalizedValue(step.body, locale),
      }))
    : copy.workshop.steps;

  return (
    <div className="page-shell">
      <section className="page-intro page-intro--wide">
        <p className="eyebrow">{copy.workshop.eyebrow}</p>
        <h1>
          {getLocalizedValue(siteContent?.workshopTitle, locale) ||
            copy.workshop.title}
        </h1>
        <p>
          {getLocalizedValue(siteContent?.workshopIntro, locale) ||
            copy.workshop.intro}
        </p>
      </section>
      <section className="story-layout">
        <div className="story-layout__image">
          {workshopImage?.url ? (
            <Image
              alt={getLocalizedValue(workshopImage.alt, locale) || copy.workshop.imageAlt}
              fill
              priority
              sizes="(max-width: 760px) 100vw, 54vw"
              src={workshopImage.url}
            />
          ) : null}
        </div>
        <div className="story-layout__copy">
          <p className="eyebrow">
            {getLocalizedValue(siteContent?.workshopProcessEyebrow, locale) ||
              copy.workshop.processEyebrow}
          </p>
          <h2>
            {getLocalizedValue(siteContent?.workshopProcessTitle, locale) ||
              copy.workshop.processTitle}
          </h2>
          <p>
            {getLocalizedValue(siteContent?.workshopParagraphOne, locale) ||
              copy.workshop.paragraphOne}
          </p>
          <p>
            {getLocalizedValue(siteContent?.workshopParagraphTwo, locale) ||
              copy.workshop.paragraphTwo}
          </p>
          <Link className="text-link" href={localizedPath(locale, "tienda")}>
            {copy.workshop.discover} <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
      <section
        className="process-strip"
        aria-label={
          getLocalizedValue(siteContent?.workshopStepsLabel, locale) ||
          copy.workshop.stepsLabel
        }
      >
        {workshopSteps.map((step, index) => (
          <div key={step.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </div>
        ))}
      </section>
    </div>
  );
}