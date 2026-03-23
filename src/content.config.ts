import { defineCollection, reference } from "astro:content";
import { file, glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    summary: z.string().optional(),
    isDraft: z.boolean(),
    tags: z.array(reference("tags")).optional(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    publishedAt: z.coerce.date().optional(),
    relatedPosts: z.array(reference("blog")).optional(),
  }),
});

// const tags = defineCollection({
//   loader: file("./src/contents/tags.json"),
//   schema: z.object({
//     slug: z.string(),
//     label: z.object({
//       en: z.string(),
//       fr: z.string(),
//     }),
//     description: z.object({
//       en: z.string().optional(),
//       fr: z.string().optional(),
//     }),
//   }),
// });

export const collections = { blog };
