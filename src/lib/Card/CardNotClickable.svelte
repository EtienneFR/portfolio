<script>
	import Card from './Card.svelte';

	export let id;
	export let src;
	export let alt;
	export let title;

	let className;
	export { className as class };
</script>

<Card bind:id bind:title>
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
