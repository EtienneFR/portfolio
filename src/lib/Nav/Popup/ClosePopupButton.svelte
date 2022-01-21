<script>
	import { X } from '$lib/Icons';
	export let onClose;
</script>

<button
	class="block absolute top-4 right-4 z-50 hover:text-gray-600 dark:hover:text-gray-400 dark:text-white"
	on:click={onClose}
>
	<svelte:component this={X} class="h-5 w-5" />
</button>
