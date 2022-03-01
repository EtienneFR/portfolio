<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import type { Post } from '$lib/types';

	export const load: Load = async ({ fetch }) => {
		const res = await fetch(`/blog.json`);

		if (!res.ok) {
			return {
				error: new Error('An error occured, please try again later.'),
				status: 500
			};
		}

		const posts = await res.json();

		return {
			props: {
				posts: posts as Post[]
			}
		};
	};
</script>

<script lang="ts">
	import Page from '$lib/Page.svelte';
	import BlogPosts from '$lib/BlogPosts.svelte';

	export let posts: Post[];
</script>

<svelte:head>
	<title>Etienne Dayre | Blog</title>
</svelte:head>

<Page class="px-8 py-4">
	<div class="py-8 text-center lg:w-full">
		<h1 class="text-left text-4xl font-bold text-blue-900 dark:text-blue-300 md:text-center">
			Blog
		</h1>
	</div>
	<div class="mx-auto flex w-full flex-col md:w-3/4">
		<BlogPosts {posts} />
	</div>
</Page>
