import { defineCollection, z } from 'astro:content';
import { docsLoader, i18nLoader } from '@astrojs/starlight/loaders';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema({
			extend: z.object({
				// 2.12.0: recorded audio of the guide (same voice as the HappyBein videos), on R2:
				// https://audio.happybein.com/yeahcore/<slug>.en.mp3. Shown as a player above the text.
				audio: z.string().optional(),
				audioMinutes: z.number().optional(),
			}),
		}),
	}),
	i18n: defineCollection({ loader: i18nLoader(), schema: i18nSchema() }),
};
