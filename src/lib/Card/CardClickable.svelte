<script lang="ts">
	import Card from './Card.svelte';

	let className: string;
	export { className as class };

	export let id: string;
	export let href: string;
	export let src: string;
	export let alt: string;
	export let title: string;
	export let content: string;
</script>

<Card bind:id bind:title bind:content>
	<div slot="clickable">
		<a data-sveltekit:prefetch {href}>
			<img class={className} {src} {alt} />
			<div class="px-3 py-2">
				<div class="mb-2 text-xl font-bold text-blue-800 dark:text-blue-200">{title}</div>
				<p class="text-justify text-gray-900 dark:text-white">
					{@html content}
				</p>
			</div>
		</a>
	</div>
</Card>
