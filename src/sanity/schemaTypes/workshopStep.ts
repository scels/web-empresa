import { defineField, defineType } from "sanity";

export const workshopStep = defineType({
  name: "workshopStep",
  title: "Paso del proceso",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "localizedString",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "body",
      title: "Descripción",
      type: "localizedText",
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: { title: "title.es" },
  },
});