<script lang="ts">
	import Animate from '$lib/Animate.svelte';

	export let title: string;
	export let level: any;

	const widths = ['', 'w-1/4', 'w-2/4', 'w-3/4', 'w-4/4'];
	const levelClass: string = widths[level];
</script>

<Animate>
	<div slot="animation-content" class="px-8 py-7">
		<div class="flex">
			<slot name="icon" />
			<span class="flex items-center text-gray-900 dark:text-white">{title}</span>
		</div>
		<div class="h-2 rounded-full bg-gray-300 text-center shadow-lg dark:bg-gray-800">
			<div class="bg-blue-800 dark:bg-blue-300 {levelClass} h-2 rounded-full text-left" />
		</div>
	</div>
</Animate>
