<script>
    import Nav from '../components/AppHeader.svelte';

    export let segment;
</script>

<Nav {segment} />

<main class="relative flex flex-col flex-grow bg-gray-100 dark:text-red-400">
    <slot />
</main>
