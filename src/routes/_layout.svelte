<script>
    import Nav from '../components/AppHeader.svelte';

    export let segment;
</script>

<Nav {segment} />

<main class="relative flex flex-col flex-grow bg-gray-100">
    <slot />
</main>
