<script lang="ts">
	import { ArrowLeft } from '$lib/Icons';
	export let href: string;
	export let name: string;
</script>

<div
	class="m-2 hidden border-b-2 border-transparent border-blue-800 px-2 py-1 transition-colors
	duration-100 hover:border-blue-400 dark:border-blue-300 dark:hover:border-blue-100
	md:inline-block"
>
	<a data-sveltekit:prefetch {href}>
		<div class="flex items-center">
			<svelte:component this={ArrowLeft} class="mr-1 h-7 w-9 object-scale-down" />
			{name}
		</div>
	</a>
</div>
