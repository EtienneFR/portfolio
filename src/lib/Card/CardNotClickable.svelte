<script lang="ts">
	import Card from './Card.svelte';

	export let id: string;
	export let src: string;
	export let alt: string;
	export let title: string;
	export let content: string;

	let className: string;
	export { className as class };
</script>

<Card bind:id bind:title bind:content>
	<div slot="not-clickable">
		<img class="w-full" {src} {alt} />

		<div class="px-3 py-2">
			<div class="mb-2 text-xl font-bold dark:text-blue-200 text-blue-800">{title}</div>
			<p class="{className} text-justify text-gray-900 dark:text-white">
				<slot />
			</p>
		</div>
	</div>
</Card>
