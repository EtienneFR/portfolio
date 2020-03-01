<script>
    import Nav from '../components/AppHeader.svelte';

    export let segment;
</script>

<Nav {segment} />

<main class="flex-grow flex">
    <slot />
</main>
