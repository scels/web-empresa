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

export type EditorialImage = {
  url: string | null;
  alt: LocalizedValue | null;
} | null;

export type WorkshopStep = {
  title: LocalizedValue;
  body: LocalizedValue;
};

export type SiteContent = {
  homeHeroKicker: LocalizedValue | null;
  homeHeroTitle: LocalizedValue | null;
  homeHeroIntro: LocalizedValue | null;
  homeHeroImage: EditorialImage;
  homeWorkshopTitle: LocalizedValue | null;
  homeStoryEyebrow: LocalizedValue | null;
  homeStoryTitle: LocalizedValue | null;
  homeStoryBody: LocalizedValue | null;
  homeStoryImage: EditorialImage;
  workshopTitle: LocalizedValue | null;
  workshopIntro: LocalizedValue | null;
  workshopImage: EditorialImage;
  workshopProcessEyebrow: LocalizedValue | null;
  workshopProcessTitle: LocalizedValue | null;
  workshopParagraphOne: LocalizedValue | null;
  workshopParagraphTwo: LocalizedValue | null;
  workshopStepsLabel: LocalizedValue | null;
  workshopSteps: WorkshopStep[] | null;
  contactTitle: LocalizedValue | null;
  contactIntro: LocalizedValue | null;
  contactPanelEyebrow: LocalizedValue | null;
  contactPanelTitle: LocalizedValue | null;
  contactPanelBody: LocalizedValue | null;
  contactLinkText: LocalizedValue | null;
  contactLinkUrl: string | null;
} | null;