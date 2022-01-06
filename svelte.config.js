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
			layout: './src/lib/BlogPostLayout.svelte'
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
