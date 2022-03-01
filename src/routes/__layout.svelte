<script>
	import '../app.css';
	import '../themes/prism-night-owl.css';
	import { page } from '$app/stores';
	import Nav from '$lib/Nav/AppHeader.svelte';

	$: segment = $page.url.pathname;
</script>

<div class="app-wrapper">
	<Nav {segment} />

	<main class="relative flex h-full flex-grow flex-col">
		<slot />
	</main>
</div>

<style>
	.app-wrapper {
		font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell,
			Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	}
</style>
