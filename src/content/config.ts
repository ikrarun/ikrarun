import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    date: z.date(),
    image: z.string(),
  }),
});

const projectsCollection = defineCollection({
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    image: z.string(),
    link: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
  projects: projectsCollection,
};
