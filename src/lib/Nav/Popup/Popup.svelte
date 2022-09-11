<script lang="ts">
	import { getContext } from 'svelte';
	import type { Link } from '$lib/types';
	import Theme from '$lib/Theme.svelte';

	const { close }: any = getContext('simple-modal');

	export let links: Link[];

	function closePopup() {
		close();
	}
</script>

<div class="rounded-md p-4 dark:bg-gray-800 dark:text-white">
	<ul class="w-min space-y-6">
		{#each links as { text, link }}
			<li class="md:mr-3">
				<a
					data-sveltekit:prefetch
					href={link}
					class="hover:text-blue-400 dark:hover:text-blue-700"
					on:click={closePopup}
				>
					{text}
				</a>
			</li>
		{/each}
	</ul>
	<div class="mt-6 border-t border-gray-500 pt-6 dark:border-gray-500/25">
		<div class="flex items-center justify-between">
			<span class="text-gray-500 dark:text-gray-400">Theme</span>
			<Theme class="pr-2" />
		</div>
	</div>
</div>
