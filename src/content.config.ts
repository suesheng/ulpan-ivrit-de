import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const courses = defineCollection({
  loader: glob({ base: "./src/content/courses", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    level: z.string(),
    moodleVisible: z.boolean().default(true),
    format: z.string(),
    entry: z.string(),
    order: z.number(),
  }),
});

const jobs = defineCollection({
  loader: glob({ base: "./src/content/jobs", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    location: z.string(),
    format: z.string(),
    level: z.string(),
    status: z.enum(["open", "closed"]).default("open"),
    order: z.number(),
  }),
});

export const collections = { courses, jobs };
