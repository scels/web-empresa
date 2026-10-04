import { defineField, defineType } from "sanity";

export const localizedString = defineType({
  name: "localizedString",
  title: "Texto traducido",
  type: "object",
  fields: [
    defineField({
      name: "es",
      title: "Español",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "ca", title: "Catalán", type: "string" }),
    defineField({ name: "en", title: "Inglés", type: "string" }),
  ],
});

export const localizedText = defineType({
  name: "localizedText",
  title: "Texto traducido",
  type: "object",
  fields: [
    defineField({
      name: "es",
      title: "Español",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "ca", title: "Catalán", type: "text", rows: 4 }),
    defineField({ name: "en", title: "Inglés", type: "text", rows: 4 }),
  ],
});