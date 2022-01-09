<script context="module">
	export async function load({ fetch }) {
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
				posts: posts
			}
		};
	}
</script>

<script>
	import Page from '$lib/Page.svelte';
	import BlogPosts from '$lib/BlogPosts.svelte';

	export let posts;
</script>

<svelte:head>
	<title>Etienne Dayre | Blog</title>
</svelte:head>

<Page class="px-8 py-4">
	<div class="py-8 text-center lg:w-full">
		<h1 class="text-4xl text-blue-900 dark:text-blue-300 text-left md:text-center font-bold">
			Blog
		</h1>
	</div>
	<div class="md:w-3/4 w-full flex flex-col ml-auto mr-auto">
		<BlogPosts {posts} />
	</div>
</Page>
