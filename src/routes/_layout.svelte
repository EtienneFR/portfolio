<script>
    import Nav from '../components/AppHeader.svelte';
    import Footer from '../components/Footer.svelte';

    export let segment;
</script>

<Nav {segment} />

<main class="relative flex flex-col flex-grow h-full bg-gray-100">
    <slot />
</main>

<Footer />
