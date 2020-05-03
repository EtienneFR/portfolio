<script>
    import Nav from '../components/AppHeader.svelte';

    export let segment;
</script>

<Nav {segment} />

<main class="relative flex flex-col flex-grow">
    <slot />
</main>
