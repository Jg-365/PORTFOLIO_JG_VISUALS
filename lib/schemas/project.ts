import { z } from "zod";

export const projectSchema = z.object({
  id: z.string().uuid().optional(),
  slug: z.string().min(2),
  title: z.string().min(2),
  subtitle: z.string().min(2),
  cover_image: z.string().url().optional().or(z.literal("")),
  gallery_images: z.array(z.string()).default([]),
  short_description: z.string().min(10),
  full_description: z.string().min(20),
  challenge: z.string().optional().default(""),
  solution: z.string().optional().default(""),
  creative_process: z.string().optional().default(""),
  tools: z.array(z.string()).default([]),
  category: z.string(),
  tags: z.array(z.string()).default([]),
  featured: z.boolean().default(false),
  published: z.boolean().default(true),
  year: z.number().int().min(2000).max(2100),
  client: z.string().optional().default(""),
  external_url: z.string().url().optional().or(z.literal("")),
  order_index: z.number().int().default(0)
});

export type ProjectInput = z.infer<typeof projectSchema>;
