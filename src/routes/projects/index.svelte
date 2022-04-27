<script lang="ts">
	import Page from '$lib/Page.svelte';
	import CardClickable from '$lib/Card/CardClickable.svelte';

	import type { Project } from '$lib/types';

	export let projects: Project[];
</script>

<svelte:head>
	<title>Etienne Dayre | Projects</title>
</svelte:head>

<Page>
	<div class="container m-auto">
		<div class="m-auto py-8 text-center lg:w-full">
			<h1 class="text-2xl text-blue-900 dark:text-blue-300">Projects</h1>
		</div>

		<span class="block px-1 py-1 text-center">All my projects</span>

		<div class="flex flex-col items-center p-6 md:flex-row-reverse">
			{#each projects as project}
				<CardClickable
					class="text-base"
					id={project.id}
					href="/projects/{project.slug}"
					src={project.src}
					alt={project.alt}
					title={project.title}
					content={project.resume}
				/>
			{/each}
		</div>
	</div>
</Page>
