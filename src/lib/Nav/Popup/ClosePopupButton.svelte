<script lang="ts">
	import { X } from '$lib/Icons';
	export let onClose: () => void;
</script>

<button
	class="absolute top-4 right-4 z-50 block hover:text-gray-600 dark:text-white dark:hover:text-gray-400"
	on:click={onClose}
>
	<svelte:component this={X} class="h-5 w-5" />
</button>
