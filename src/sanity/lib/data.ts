import type { Category, Product } from "@/sanity/lib/types";

import { sanityFetch } from "./client";
import {
  CATEGORIES_QUERY,
  CATEGORY_BY_SLUG_QUERY,
  PRODUCT_BY_SLUG_QUERY,
  PRODUCTS_BY_CATEGORY_QUERY,
  PRODUCTS_QUERY,
} from "./queries";

export async function getProducts(): Promise<Product[]> {
  return (await sanityFetch<Product[]>({ query: PRODUCTS_QUERY })) ?? [];
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  return sanityFetch<Product | null>({
    query: PRODUCT_BY_SLUG_QUERY,
    params: { slug },
  });
}

export async function getCategories(): Promise<Category[]> {
  return (await sanityFetch<Category[]>({ query: CATEGORIES_QUERY })) ?? [];
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  return sanityFetch<Category | null>({
    query: CATEGORY_BY_SLUG_QUERY,
    params: { slug },
  });
}

export async function getProductsByCategory(slug: string): Promise<Product[]> {
  return (
    (await sanityFetch<Product[]>({
      query: PRODUCTS_BY_CATEGORY_QUERY,
      params: { slug },
    })) ?? []
  );
}