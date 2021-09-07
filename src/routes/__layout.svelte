<script>
    import '../app.css'
    import { page } from '$app/stores';
    import Nav from '$lib/AppHeader.svelte';

    $: segment = $page.path;
</script>

<Nav {segment} />

<main class="relative flex flex-col flex-grow">
    <slot />
</main>
