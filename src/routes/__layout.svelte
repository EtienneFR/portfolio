<script>
    import '../app.css'
    import { page } from '$app/stores';
    import Nav from '$lib/Nav/AppHeader.svelte';

    $: segment = $page.path;
</script>

<div class="app-wrapper">
    <Nav {segment} />

    <main class="relative flex flex-col flex-grow h-full">
        <slot />
    </main>
</div>

<style>
    .app-wrapper {
        font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell,
            Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }
</style>
