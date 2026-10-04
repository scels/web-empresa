import { createClient, type QueryParams } from "next-sanity";

import { apiVersion, dataset, isSanityConfigured, projectId } from "@/sanity/env";

export const client = isSanityConfigured
  ? createClient({
      projectId: projectId!,
      dataset,
      apiVersion,
      useCdn: true,
    })
  : null;

export async function sanityFetch<Result>({
  query,
  params = {},
}: {
  query: string;
  params?: QueryParams;
}): Promise<Result | null> {
  if (!client) return null;

  return client.fetch<Result>(query, params, {
    next: { revalidate: 60 },
  });
}