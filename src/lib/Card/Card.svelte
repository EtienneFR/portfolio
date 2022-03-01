<script lang="ts">
	import Animate from '$lib/Animate.svelte';

	let className = '';
	export { className as class };

	export let id: string;
	export let title: string;
	export let content: string;
</script>

<Animate>
	<div
		slot="animation-content"
		{id}
		class="{className} m-8 block w-4/5 transform overflow-hidden rounded
		bg-gray-200 shadow-lg shadow-blue-900/30 transition duration-200 ease-in-out
		hover:-translate-y-1 hover:scale-110 hover:bg-gray-100 dark:bg-gray-800 dark:shadow-blue-200/30
		dark:hover:bg-gray-700 sm:max-w-sm"
	>
		<slot name="clickable" {title} {content} />
		<slot name="not-clickable" {title} {content} />
	</div>
</Animate>
