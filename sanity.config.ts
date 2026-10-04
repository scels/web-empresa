"use client";

import { structureTool } from "sanity/structure";
import { defineConfig } from "sanity";

import { schemaTypes } from "./src/sanity/schemaTypes";

export default defineConfig({
  name: "default",
  title: "Libélula Cerámica",
  projectId: process.env.SANITY_STUDIO_PROJECT_ID ?? "",
  dataset: process.env.SANITY_STUDIO_DATASET ?? "production",
  basePath: "/studio",
  plugins: [structureTool()],
  schema: { types: schemaTypes },
});