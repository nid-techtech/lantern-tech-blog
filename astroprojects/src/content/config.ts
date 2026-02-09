import { defineCollection, z } from 'astro:content';

const commonSchema = z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    coverImage: z.string().optional(),
    ogImage: z.string().optional(), // Imgur URL for OGP
    draft: z.boolean().default(false),
});

const blogCollection = defineCollection({
    type: 'content',
    schema: commonSchema,
});

const newsreleaseCollection = defineCollection({
    type: 'content',
    schema: commonSchema,
});

const notesCollection = defineCollection({
    type: 'content',
    schema: commonSchema,
});

export const collections = {
    blog: blogCollection,
    newsrelease: newsreleaseCollection,
    notes: notesCollection,
};
