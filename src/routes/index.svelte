<script lang="ts">
	import Page from '$lib/Page.svelte';
	import DropdownComponent from '$lib/DropdownComponent.svelte';
	import type { Option } from '$lib/types';

	const description = {
		text: `
            I'm a web developer based in Paris.
            I really appreciate web, sciences, innovation and technologies in general.
            I was integrated into the professional context and I was able to grasp the challenges of an IT project
            during block apprenticeship in a banking company.
            `
	};

	const cvVersion: Option[] = [
		{
			id: 'EN',
			label: '🇺🇸',
			src: '/english_cv.pdf'
		},
		{
			id: 'FR',
			label: '🇫🇷',
			src: '/cv.pdf'
		}
	];
</script>

<svelte:head>
	<title>Etienne Dayre</title>
</svelte:head>

<Page>
	<div class="container m-auto w-3/4">
		<div class="mt-8 flex flex-wrap lg:space-x-10">
			<div class="w-full text-center lg:flex-1 lg:text-left">
				<h1 class="text-3xl text-blue-900 dark:text-blue-300">Etienne Dayre</h1>
				<h2 class="text-2xl">Full Stack Web Developer</h2>
			</div>
			<div class="m-2 mt-10 px-2 text-center sm:w-full lg:flex-1 lg:text-right">
				{description.text}
			</div>
		</div>
		<div class="mt-2 w-full text-center lg:text-left">
			<DropdownComponent option={cvVersion} label="CV" />
		</div>
	</div>
</Page>
