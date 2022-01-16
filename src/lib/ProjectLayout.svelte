<script>
	// @ts-nocheck

	import Page from '$lib/Page.svelte';
	import CardNotClickable from '$lib/Card/CardNotClickable.svelte';
	import BackButton from '$lib/BackButton.svelte';

	export let id;
	export let src;
	export let alt;
	export let title;
</script>

<svelte:head>
	<title>Etienne Dayre | {title}</title>
</svelte:head>

<Page>
	<div class="container m-auto">
		<BackButton href="/projects" name="Projects" />
		<div class="py-8 m-auto text-center lg:w-full">
			<h1 class="text-2xl text-blue-900 dark:text-blue-300">Projects</h1>
		</div>

		<span class="block px-1 py-1 text-center">{title}</span>

		<div class="flex flex-col items-center p-6">
			<CardNotClickable class="prose prose-indigo" {id} {src} {alt} {title}>
				<slot />
			</CardNotClickable>
		</div>
	</div>
</Page>
