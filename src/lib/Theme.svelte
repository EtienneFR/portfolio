<script>
	import { Light, Dark } from '$lib/Icons';

	let className;
	export { className as class };

	//Activate or not the dark mode
	//Set theme in localStorage
	function toggleDarkMode() {
		if (localStorage.theme === 'dark') {
			document.documentElement.classList.remove('dark');
			localStorage.theme = 'light';
		} else if (localStorage.theme === 'light') {
			document.documentElement.classList.add('dark');
			localStorage.theme = 'dark';
		}
	}
</script>

<label for="toogle" class="flex items-center cursor-pointer {className}">
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
