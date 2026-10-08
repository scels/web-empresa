import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { dictionaries, isLocale } from "@/lib/i18n/dictionaries";

type ContactPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: ContactPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    title: dictionaries[locale].navigation.contact,
    description: dictionaries[locale].contact.intro,
  };
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const copy = dictionaries[locale];
  const contact = copy.contact;
  const channels = [
    {
      name: "Instagram",
      detail: "@xavicels_ceramics",
      description: contact.instagramNote,
      href: contact.linkUrl,
    },
    {
      name: "WhatsApp",
      detail: "+34 677 970 534",
      description: contact.whatsappNote,
      href: "https://wa.me/34677970534",
    },
    {
      name: contact.phoneLabel,
      detail: "+34 677 970 534",
      description: contact.phoneNote,
      href: "tel:+34677970534",
    },
  ];

  return (
    <div className="page-shell contact-page">
      <section className="page-intro">
        <p className="eyebrow">{copy.contact.eyebrow}</p>
        <h1>{contact.title}</h1>
        <p>{contact.intro}</p>
      </section>
      <section className="contact-panel contact-panel--with-image">
        <div className="contact-panel__number">01</div>
        <div>
          <p className="eyebrow">{contact.panelEyebrow}</p>
          <h2>{contact.panelTitle}</h2>
          <p>{contact.panelBody}</p>
          <nav className="contact-channels" aria-label={contact.channelsLabel}>
            {channels.map((channel) => (
              <a
                className="contact-channel"
                href={channel.href}
                key={channel.name}
                target={channel.href.startsWith("https:") ? "_blank" : undefined}
                rel={channel.href.startsWith("https:") ? "noopener noreferrer" : undefined}
              >
                <span className="contact-channel__heading">
                  <strong>{channel.name}</strong>
                  <span aria-hidden="true">↗</span>
                </span>
                <span className="contact-channel__detail">{channel.detail}</span>
                <span>{channel.description}</span>
              </a>
            ))}
          </nav>
        </div>
        <div className="contact-panel__image">
          <Image
            alt={contact.imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, 35vw"
            src={contact.image}
          />
        </div>
      </section>
    </div>
  );
}