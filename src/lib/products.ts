export type Product = {
  slug: string;
  name: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  label?: string;
};

export const products: Product[] = [
  {
    slug: "taza-de-gres",
    name: "Taza de gres",
    category: "Para cada día",
    description: "Una forma sencilla, modelada y esmaltada a mano.",
    image:
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Piezas de cerámica artesanal en el taller",
    label: "Hecha a mano",
  },
  {
    slug: "jarron-organico",
    name: "Jarrón orgánico",
    category: "Piezas únicas",
    description: "Volúmenes imperfectos que guardan un lugar para las flores.",
    image:
      "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Jarrón artesanal de cerámica",
    imagePosition: "center 58%",
  },
  {
    slug: "cuenco-cotidiano",
    name: "Cuenco cotidiano",
    category: "Para cada día",
    description: "Tierra, agua y esmalte en una pieza para usar sin prisa.",
    image:
      "https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Cuenco de cerámica hecho a mano",
    imagePosition: "center 60%",
    label: "Pequeña serie",
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}