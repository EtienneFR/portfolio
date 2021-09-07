<script>
    import '../app.css'
    import Nav from '$lib/AppHeader.svelte';

    export let segment;
</script>

<Nav {segment} />

<main class="relative flex flex-col flex-grow">
    <slot />
</main>
