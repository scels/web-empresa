import type { Locale } from "@/lib/i18n/dictionaries";

export type LocalizedValue = Partial<Record<Locale, string>>;

export type Category = {
  slug: string;
  name: LocalizedValue;
  description?: LocalizedValue | null;
  parent?: Pick<Category, "slug" | "name"> | null;
};

export type ProductImage = {
  url: string | null;
  alt: LocalizedValue | null;
};

export type Product = {
  slug: string;
  name: LocalizedValue;
  description: LocalizedValue;
  category: Category | null;
  images: ProductImage[];
  status: "available" | "sold" | "madeToOrder";
  price: number | null;
  dimensions: string | null;
  material: LocalizedValue | null;
  technique: LocalizedValue | null;
  reference: string | null;
  featured: boolean;
};
