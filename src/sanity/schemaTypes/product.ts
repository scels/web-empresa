import { defineArrayMember, defineField, defineType } from "sanity";

export const product = defineType({
  name: "product",
  title: "Producto",
  type: "document",
  groups: [
    { name: "content", title: "Contenido", default: true },
    { name: "details", title: "Detalles de la pieza" },
    { name: "organization", title: "Organización" },
  ],
  fields: [
    defineField({
      name: "name",
      title: "Nombre",
      type: "localizedString",
      group: "content",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Dirección web",
      type: "slug",
      options: { source: "name.es", maxLength: 96 },
      group: "content",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Descripción",
      type: "localizedText",
      group: "content",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "images",
      title: "Fotografías",
      description: "La primera fotografía se usa como imagen principal.",
      type: "array",
      of: [defineArrayMember({ type: "productImage" })],
      group: "content",
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: "status",
      title: "Estado de la pieza",
      type: "string",
      group: "details",
      options: {
        list: [
          { title: "Disponible", value: "available" },
          { title: "Vendida", value: "sold" },
          { title: "Bajo encargo", value: "madeToOrder" },
        ],
        layout: "radio",
      },
      initialValue: "available",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "price",
      title: "Precio orientativo (EUR)",
      description: "Opcional. Es informativo; no activa una compra online.",
      type: "number",
      group: "details",
      validation: (rule) => rule.min(0),
    }),
    defineField({
      name: "dimensions",
      title: "Medidas",
      description: "Por ejemplo: 12 × 8 cm.",
      type: "string",
      group: "details",
    }),
    defineField({
      name: "material",
      title: "Material",
      type: "localizedString",
      group: "details",
    }),
    defineField({
      name: "technique",
      title: "Técnica",
      type: "localizedString",
      group: "details",
    }),
    defineField({
      name: "reference",
      title: "Referencia interna",
      type: "string",
      group: "organization",
    }),
    defineField({
      name: "category",
      title: "Categoría",
      type: "reference",
      to: [{ type: "category" }],
      group: "organization",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "collections",
      title: "Colecciones",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: [{ type: "collection" }] })],
      group: "organization",
    }),
    defineField({
      name: "featured",
      title: "Mostrar en portada",
      type: "boolean",
      group: "organization",
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: "name.es", media: "images.0.image", status: "status" },
    prepare({ title, media, status }) {
      const statusLabel = {
        available: "Disponible",
        sold: "Vendida",
        madeToOrder: "Bajo encargo",
      }[status as "available" | "sold" | "madeToOrder"];

      return { title, subtitle: statusLabel, media };
    },
  },
});