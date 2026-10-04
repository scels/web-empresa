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
import { products } from "@/lib/products";

type WorkshopPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: WorkshopPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return { title: dictionaries[locale].workshop.eyebrow };
}

export default async function WorkshopPage({ params }: WorkshopPageProps) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();

  const locale: Locale = rawLocale;
  const copy = dictionaries[locale];

  return (
    <div className="page-shell">
      <section className="page-intro page-intro--wide">
        <p className="eyebrow">{copy.workshop.eyebrow}</p>
        <h1>{copy.workshop.title}</h1>
        <p>{copy.workshop.intro}</p>
      </section>
      <section className="story-layout">
        <div className="story-layout__image">
          <Image
            alt={copy.workshop.imageAlt}
            fill
            priority
            sizes="(max-width: 760px) 100vw, 54vw"
            src={products[0].image}
          />
        </div>
        <div className="story-layout__copy">
          <p className="eyebrow">{copy.workshop.processEyebrow}</p>
          <h2>{copy.workshop.processTitle}</h2>
          <p>{copy.workshop.paragraphOne}</p>
          <p>{copy.workshop.paragraphTwo}</p>
          <Link className="text-link" href={localizedPath(locale, "tienda")}>
            {copy.workshop.discover} <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
      <section className="process-strip" aria-label={copy.workshop.stepsLabel}>
        {copy.workshop.steps.map((step, index) => (
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