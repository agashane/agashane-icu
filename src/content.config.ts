import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		tags: z.string().array().optional(),
		createdAt: z.coerce.date(),
		updatedAt: z.coerce.date(),
	}),
});

export const collections = { blog };
