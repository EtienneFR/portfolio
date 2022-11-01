<script lang="ts">
	// @ts-nocheck
	import Page from '$lib/Page.svelte';
	import BackButton from '$lib/BackButton.svelte';
	import CardNotClickable from '$lib/Card/CardNotClickable.svelte';
	import type { PageData } from './$types';
	import '../../shiki.css';

	export let data: PageData;
	$: title = data.title;
	$: id = data.id;
	$: src = data.src;
	$: alt = data.alt;
	$: Content = data.content;
</script>

<svelte:head>
	<title>Etienne Dayre | {title}</title>
</svelte:head>

<Page>
	<div class="container m-auto">
		<BackButton href="/projects" name="Projects" />
		<div class="m-auto py-8 text-center lg:w-full">
			<h1 class="text-2xl text-blue-900 dark:text-blue-300">Projects</h1>
		</div>

		<span class="block px-1 py-1 text-center">{title}</span>

		<div class="flex flex-col items-center p-6">
			<CardNotClickable class="prose prose-indigo" {id} {src} {alt} {title}>
				<svelte:component this={Content} />
			</CardNotClickable>
		</div>
	</div>
</Page>
