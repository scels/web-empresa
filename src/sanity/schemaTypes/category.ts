import { defineField, defineType } from "sanity";

export const category = defineType({
  name: "category",
  title: "Categoría",
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
    defineField({
      name: "parent",
      title: "Categoría principal",
      description: "Déjalo vacío si esta es una categoría principal.",
      type: "reference",
      to: [{ type: "category" }],
    }),
  ],
  preview: {
    select: { title: "name.es", subtitle: "slug.current", parent: "parent.name.es" },
    prepare({ title, subtitle, parent }) {
      return {
        title,
        subtitle: parent ? `${parent} / ${subtitle}` : subtitle,
      };
    },
  },
});