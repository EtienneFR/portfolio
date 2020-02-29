<script>
    import Nav from '../components/Nav.svelte';

    export let segment;
</script>

<Nav {segment} />

<main class="flex-grow flex">
    <slot />
</main>
