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
type WorkshopPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: WorkshopPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    title: dictionaries[locale].workshop.title,
    description: dictionaries[locale].workshop.intro,
  };
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
        {copy.workshop.location ? <p>{copy.workshop.location}</p> : null}
      </section>
      <section className="story-layout">
        <div className="story-layout__image">
          <Image
            alt={copy.workshop.imageAlt}
            fill
            loading="eager"
            priority
            sizes="(max-width: 760px) 100vw, 54vw"
            src={copy.workshop.image}
          />
        </div>
        <div className="story-layout__copy">
          <p className="eyebrow">Taller Libélula</p>
          <h2>{copy.workshop.spaceTitle}</h2>
          <p>{copy.workshop.spaceBody}</p>
          <Link className="text-link" href={localizedPath(locale, "tienda")}>
            {copy.workshop.discover} <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
      <section className="workshop-process">
        <div>
          <p className="eyebrow">{copy.workshop.processEyebrow}</p>
          <h2>{copy.workshop.processTitle}</h2>
        </div>
        <div>
          <p>{copy.workshop.paragraphOne}</p>
          <p>{copy.workshop.paragraphTwo}</p>
        </div>
      </section>
      <section
        className="process-strip"
        aria-label={copy.workshop.stepsLabel}
      >
        {copy.workshop.steps.map((step, index) => (
          <div key={step.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </div>
        ))}
      </section>
      <section className="workshop-pieces">
        <div className="workshop-pieces__copy">
          <h2>{copy.workshop.piecesTitle}</h2>
          <p>{copy.workshop.piecesBody}</p>
        </div>
        <div className="workshop-pieces__images">
          <div>
            <Image
              alt={copy.workshop.piecesAlt}
              fill
              sizes="(max-width: 640px) 50vw, 30vw"
              src="/images/productos_boles.jpeg"
            />
          </div>
          <div>
            <Image
              alt={copy.workshop.piecesDetailAlt}
              fill
              sizes="(max-width: 640px) 50vw, 30vw"
              src="/images/productos_v2.jpeg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}