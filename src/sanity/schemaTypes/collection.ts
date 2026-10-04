import { defineField, defineType } from "sanity";

export const collection = defineType({
  name: "collection",
  title: "Colección",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nombre",
      type: "localizedString",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Dirección web",
      type: "slug",
      options: { source: "name.es", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Descripción",
      type: "localizedText",
    }),
    defineField({
      name: "image",
      title: "Imagen",
      type: "image",
      options: { hotspot: true },
    }),
  ],
});