import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import { readFileSync } from 'fs';
import { mdsvex } from 'mdsvex';
import rehypeSlugPlugin from 'rehype-slug';
import rehypeExternalLinks from 'rehype-external-links';
import { lex, parse } from 'fenceparser';
import { createShikiHighlighter, runTwoSlash, renderCodeToHTML } from 'shiki-twoslash';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svx'],

	preprocess: [
		preprocess({
			postcss: true
		}),
		mdsvex({
			rehypePlugins: [rehypeSlugPlugin, rehypeExternalLinks],
			layout: './src/lib/BlogPostLayout.svelte',
			highlight: {
				async highlighter(code, lang, meta) {
					// Special thanks to Baptiste Devessier for this part of the config
					// https://github.com/Devessier/

					let fence;

					try {
						fence = parse(lex([lang, meta].filter(Boolean).join(' ')));
					} catch (error) {
						throw new Error(`Could not parse the codefence`);
					}

					let twoslash;

					// Check if the codefence is not undefined
					if (fence?.twoslash === true) {
						twoslash = runTwoSlash(code, lang);
					}

					const highlighter = await createShikiHighlighter({
						// Use the theme loaded from the file in /themes folder
						theme: JSON.parse(readFileSync('./themes/Night Owl-color-theme.json'))
					});

					// Render the code to HTML using the shiki-twoslash library
					const html = renderCodeToHTML(code, lang, fence ?? {}, {}, highlighter, twoslash);

					return `{@html \`<div class="relative">${html}</div>\` }`;
				}
			}
		})
	],

	kit: {
		adapter: adapter(),
		target: '#svelte',
		prerender: {
			crawl: true,
			enabled: true,
			onError: 'continue',
			entries: ['*']
		}
	}
};

export default config;
