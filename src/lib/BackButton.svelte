<script>
	import { ArrowLeft } from '$lib/Icons';
	export let href;
	export let name;
</script>

<div
	class="hidden px-2 py-1 m-2 transition-colors duration-100 border-b-2 border-transparent
	border-blue-800 dark:border-blue-300 md:inline-block hover:border-blue-400
	dark:hover:border-blue-100"
>
	<a sveltekit:prefetch {href}>
		<div class="flex items-center">
			<svelte:component this={ArrowLeft} class="object-scale-down mr-1 h-7 w-9" />
			{name}
		</div>
	</a>
</div>
