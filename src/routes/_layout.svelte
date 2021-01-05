<script>
    import Nav from '../components/AppHeader.svelte';
    import Footer from '../components/Footer.svelte';

    export let segment;
</script>

<Nav {segment} />

<main class="relative flex flex-col flex-grow bg-gray-100 dark:text-red-400">
    <slot />
</main>

<Footer />
