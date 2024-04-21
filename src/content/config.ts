import { defineCollection, z } from "astro:content";

const portfolioCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().min(1),
    date: z.date(),
    thumbnail: z.string().min(1),
  }),
});

export const collections = {
  portfolio: portfolioCollection,
};
