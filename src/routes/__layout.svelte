<script>
    import '../app.css'
    import { page } from '$app/stores';
    import Nav from '$lib/Nav/AppHeader.svelte';

    $: segment = $page.path;
</script>

<Nav {segment} />

<main class="relative flex flex-col flex-grow h-full">
    <slot />
</main>
