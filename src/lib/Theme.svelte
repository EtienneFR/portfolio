<script lang="ts">
	import { Light, Dark } from '$lib/Icons';
	import theme from '$lib/stores/theme';

	let className: string;
	export { className as class };

	//Activate or not the dark mode
	//Set theme in localStorage
	function toggleDarkMode() {
		if ($theme === 'dark') {
			document.documentElement.classList.remove('dark');
			theme.set('light');
		} else if ($theme === 'light') {
			document.documentElement.classList.add('dark');
			theme.set('dark');
		}
	}
</script>

<label for="toogle" class="flex cursor-pointer items-center {className}">
	<div class="relative">
		<input id="toogle" type="checkbox" class="hidden" on:change={toggleDarkMode} />

		<span class="dark:hidden" tabindex="0">
			<span class="sr-only">Light Mode</span>
			<svelte:component this={Light} class="h-6 w-6 text-blue-700 hover:text-blue-400" />
		</span>

		<span class="hidden dark:inline">
			<span class="sr-only">Dark Mode</span>
			<svelte:component this={Dark} class="h-6 w-6 text-blue-300 hover:text-blue-100" />
		</span>
	</div>
</label>
