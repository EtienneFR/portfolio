import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import rehypeSlugPlugin from 'rehype-slug';
import rehypeExternalLinks from 'rehype-external-links';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svx'],

	preprocess: [
		preprocess({
			postcss: true
		}),
		mdsvex({
			rehypePlugins: [rehypeSlugPlugin, rehypeExternalLinks],
			layout: {
				blog: './src/lib/BlogPostLayout.svelte',
				project: './src/lib/ProjectLayout.svelte'
			}
		})
	],

	kit: {
		adapter: adapter(),
		prerender: {
			crawl: true,
			enabled: true,
			onError: 'continue',
			entries: ['*'],
			default: true
		}
	}
};

export default config;
