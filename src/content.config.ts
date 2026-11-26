import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const yazilar = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/yazilar' }),
  schema: z.object({
    baslik: z.string(),
    aciklama: z.string(),
    tarih: z.coerce.date(),
    kategori: z.string(),
    altKategori: z.string().optional(),
    gorsel: z.string(),
    gorselAlt: z.string(),
    etiketler: z.array(z.string()).default([]),
    kisaca: z.array(z.string()).default([]),
    sss: z.array(z.object({ s: z.string(), c: z.string() })).default([]),
    urunler: z.array(z.object({ ad: z.string(), url: z.string() })).default([]),
  }),
});

export const collections = { yazilar };
