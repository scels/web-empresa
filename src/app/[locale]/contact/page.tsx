import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { dictionaries, isLocale } from "@/lib/i18n/dictionaries";

type ContactPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: ContactPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return { title: dictionaries[locale].navigation.contact };
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const copy = dictionaries[locale];

  return (
    <div className="page-shell contact-page">
      <section className="page-intro">
        <p className="eyebrow">{copy.contact.eyebrow}</p>
        <h1>{copy.contact.title}</h1>
        <p>{copy.contact.intro}</p>
      </section>
      <section className="contact-panel">
        <div className="contact-panel__number">01</div>
        <div>
          <p className="eyebrow">{copy.contact.panelEyebrow}</p>
          <h2>{copy.contact.panelTitle}</h2>
          <p>{copy.contact.panelBody}</p>
          <a
            className="button button--dark"
            href="https://tallerlibelula.es/"
            rel="noreferrer"
            target="_blank"
          >
            {copy.contact.link} <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </div>
  );
}