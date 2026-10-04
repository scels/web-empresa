"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { locales, type Locale } from "@/lib/i18n/dictionaries";

const localeNames: Record<Locale, string> = {
  es: "ES",
  ca: "CA",
  en: "EN",
};

type LanguageSwitcherProps = {
  locale: Locale;
  label: string;
};

export function LanguageSwitcher({ locale, label }: LanguageSwitcherProps) {
  const pathname = usePathname() ?? `/${locale}`;
  const currentPrefix = `/${locale}`;
  const suffix = pathname.startsWith(`${currentPrefix}/`)
    ? pathname.slice(currentPrefix.length)
    : "";

  return (
    <nav aria-label={label} className="language-switcher">
      {locales.map((targetLocale) => (
        <Link
          aria-current={targetLocale === locale ? "page" : undefined}
          href={`/${targetLocale}${suffix}`}
          key={targetLocale}
        >
          {localeNames[targetLocale]}
        </Link>
      ))}
    </nav>
  );
}