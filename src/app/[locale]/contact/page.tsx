import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { dictionaries, isLocale } from "@/lib/i18n/dictionaries";
import { getSiteContent } from "@/sanity/lib/data";
import { getLocalizedValue } from "@/sanity/lib/localized";

type ContactPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: ContactPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const siteContent = await getSiteContent();
  return {
    title:
      getLocalizedValue(siteContent?.contactTitle, locale) ||
      dictionaries[locale].navigation.contact,
    description:
      getLocalizedValue(siteContent?.contactIntro, locale) ||
      dictionaries[locale].contact.intro,
  };
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const copy = dictionaries[locale];
  const siteContent = await getSiteContent();
  const contactUrl = siteContent?.contactLinkUrl || "https://tallerlibelula.es/";

  return (
    <div className="page-shell contact-page">
      <section className="page-intro">
        <p className="eyebrow">{copy.contact.eyebrow}</p>
        <h1>
          {getLocalizedValue(siteContent?.contactTitle, locale) ||
            copy.contact.title}
        </h1>
        <p>
          {getLocalizedValue(siteContent?.contactIntro, locale) ||
            copy.contact.intro}
        </p>
      </section>
      <section className="contact-panel">
        <div className="contact-panel__number">01</div>
        <div>
          <p className="eyebrow">
            {getLocalizedValue(siteContent?.contactPanelEyebrow, locale) ||
              copy.contact.panelEyebrow}
          </p>
          <h2>
            {getLocalizedValue(siteContent?.contactPanelTitle, locale) ||
              copy.contact.panelTitle}
          </h2>
          <p>
            {getLocalizedValue(siteContent?.contactPanelBody, locale) ||
              copy.contact.panelBody}
          </p>
          <a
            className="button button--dark"
            href={contactUrl}
            rel="noreferrer"
            target="_blank"
          >
            {getLocalizedValue(siteContent?.contactLinkText, locale) ||
              copy.contact.link}{" "}
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </div>
  );
}