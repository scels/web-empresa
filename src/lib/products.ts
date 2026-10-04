import type { LocalizedText } from "@/lib/i18n/dictionaries";

export type Product = {
  slug: string;
  name: LocalizedText;
  category: {
    slug: string;
    name: LocalizedText;
  };
  description: LocalizedText;
  image: string;
  imageAlt: LocalizedText;
  imagePosition?: string;
  label?: LocalizedText;
};

export const products: Product[] = [
  {
    slug: "taza-de-gres",
    name: {
      es: "Taza de gres",
      ca: "Tassa de gres",
      en: "Stoneware cup",
    },
    category: {
      slug: "para-cada-dia",
      name: {
        es: "Para cada día",
        ca: "Per a cada dia",
        en: "Everyday",
      },
    },
    description: {
      es: "Una forma sencilla, modelada y esmaltada a mano.",
      ca: "Una forma senzilla, modelada i esmaltada a mà.",
      en: "A simple shape, hand-modelled and glazed.",
    },
    image:
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1000&q=85",
    imageAlt: {
      es: "Piezas de cerámica artesanal en el taller",
      ca: "Peces de ceràmica artesanal al taller",
      en: "Handmade ceramic pieces in the studio",
    },
    label: {
      es: "Hecha a mano",
      ca: "Feta a mà",
      en: "Handmade",
    },
  },
  {
    slug: "jarron-organico",
    name: {
      es: "Jarrón orgánico",
      ca: "Gerro orgànic",
      en: "Organic vase",
    },
    category: {
      slug: "piezas-unicas",
      name: {
        es: "Piezas únicas",
        ca: "Peces úniques",
        en: "One of a kind",
      },
    },
    description: {
      es: "Volúmenes imperfectos que guardan un lugar para las flores.",
      ca: "Volums imperfectes que fan lloc a les flors.",
      en: "Imperfect forms with room for a few flowers.",
    },
    image:
      "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=1000&q=85",
    imageAlt: {
      es: "Jarrón artesanal de cerámica",
      ca: "Gerro artesanal de ceràmica",
      en: "Handmade ceramic vase",
    },
    imagePosition: "center 58%",
  },
  {
    slug: "cuenco-cotidiano",
    name: {
      es: "Cuenco cotidiano",
      ca: "Bol quotidià",
      en: "Everyday bowl",
    },
    category: {
      slug: "para-cada-dia",
      name: {
        es: "Para cada día",
        ca: "Per a cada dia",
        en: "Everyday",
      },
    },
    description: {
      es: "Tierra, agua y esmalte en una pieza para usar sin prisa.",
      ca: "Terra, aigua i esmalt en una peça per fer servir sense pressa.",
      en: "Earth, water, and glaze in a piece made for everyday use.",
    },
    image:
      "https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?auto=format&fit=crop&w=1000&q=85",
    imageAlt: {
      es: "Cuenco de cerámica hecho a mano",
      ca: "Bol de ceràmica fet a mà",
      en: "Handmade ceramic bowl",
    },
    imagePosition: "center 60%",
    label: {
      es: "Pequeña serie",
      ca: "Sèrie petita",
      en: "Small batch",
    },
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getCategories() {
  const uniqueCategories = new Map<string, Product["category"]>();

  for (const product of products) {
    uniqueCategories.set(product.category.slug, product.category);
  }

  return [...uniqueCategories.values()];
}

export function getCategoryBySlug(slug: string) {
  return getCategories().find((category) => category.slug === slug);
}

export function getProductsByCategory(slug: string) {
  return products.filter((product) => product.category.slug === slug);
}
