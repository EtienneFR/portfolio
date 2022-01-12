<script context="module">
	export async function load({ fetch }) {
		const res = await fetch(`/projects.json`);

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
	import CardClickable from '$lib/Card/CardClickable.svelte';

	export let posts;
</script>

<svelte:head>
	<title>Etienne Dayre | Projects</title>
</svelte:head>

<Page>
	<div class="container m-auto">

		<div class="py-8 m-auto text-center lg:w-full">
			<h1 class="text-2xl text-blue-900 dark:text-blue-300">Projects</h1>
		</div>

		<span class="block px-1 py-1 text-center">All my projects</span>

		<div class="flex flex-col md:flex-row-reverse items-center p-6">
			{#each posts as post}
				<CardClickable
					class="text-base"
					id={post.id}
					href="/projects/{post.slug}"
					src={post.src}
					alt={post.alt}
					title={post.title}
					content={post.resume} />
			{/each}
		</div>
	</div>
</Page>
