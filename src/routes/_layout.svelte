<script>
    import Nav from '../components/AppHeader.svelte';
    import Footer from '../components/Footer.svelte';

    export let segment;
</script>

<Nav {segment} />

<main
    class="relative flex flex-col flex-grow bg-gray-100 dark:bg-gray-700 dark:text-white">
    <slot />
</main>

<Footer />
