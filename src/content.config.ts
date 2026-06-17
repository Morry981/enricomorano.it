import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
    schema: z.object({
        title: z.string(),
        // titolo opzionale con markup (es. <span class="hl">) per evidenziare keyword nell'h1
        titleHtml: z.string().optional(),
        description: z.string(),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        tags: z.array(z.string()).default([]),
        // cluster di appartenenza (es. assistenza-prestashop) + url della pillar di riferimento
        cluster: z.string().optional(),
        pillar: z.string().optional(),
        cover: z.string().optional(),
        draft: z.boolean().default(false),
    }),
});

export const collections = { blog };
