import Link from "next/link";

import { localizedPath, type Locale } from "@/lib/i18n/dictionaries";
import { getLocalizedValue } from "@/sanity/lib/localized";
import type { Category } from "@/sanity/lib/types";

type CategoryLinksProps = {
  categories: Category[];
  locale: Locale;
  parentSlug?: string;
};

export function CategoryLinks({ categories, locale, parentSlug }: CategoryLinksProps) {
  const children = categories.filter((category) => category.parent?.slug === parentSlug);

  if (!children.length) return null;

  return (
    <ul className="category-tree">
      {children.map((category) => (
        <li key={category.slug}>
          <Link href={localizedPath(locale, `tienda/categoria/${category.slug}`)}>
            {getLocalizedValue(category.name, locale)}
          </Link>
          <CategoryLinks categories={categories} locale={locale} parentSlug={category.slug} />
        </li>
      ))}
    </ul>
  );
}