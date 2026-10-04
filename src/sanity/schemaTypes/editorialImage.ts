import { defineField, defineType } from "sanity";

export const editorialImage = defineType({
  name: "editorialImage",
  title: "Imagen editorial",
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
      type: "localizedString",
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: { title: "alt.es", media: "image" },
  },
});