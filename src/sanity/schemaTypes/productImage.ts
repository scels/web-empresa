import { defineField, defineType } from "sanity";

export const productImage = defineType({
  name: "productImage",
  title: "Imagen de producto",
  type: "object",
  fields: [
    defineField({
      name: "image",
      title: "Imagen",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "alt",
      title: "Texto alternativo",
      description: "Describe la imagen para personas que no pueden verla.",
      type: "localizedString",
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: { title: "alt.es", media: "image" },
  },
});