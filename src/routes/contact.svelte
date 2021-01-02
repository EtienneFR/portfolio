<script>
    import Page from '../components/Page.svelte';
    import Footer from '../components/Footer.svelte';

    const contact = [
        {
            href: 'https://github.com/EtienneFR/',
            src: 'github.svg',
            alt: 'github',
        },
        {
            href: 'https://linkedin.com/in/etienne-dayre/',
            src: 'linkedin.svg',
            alt: 'linkedin',
        },
    ];
</script>

<svelte:head>
    <title>Etienne Dayre | Contact</title>
</svelte:head>

<Page>
    <div class="lg:w-full text-center m-auto py-8">
        <h1 class="text-blue-600 text-2xl">Contact</h1>
    </div>

    <div class="flex flex-col">
        {#each contact as { href, src, alt }}
            <div class="flex justify-center p-3">
                <a {href} target="_blank" rel="noopener">

                    <img {src} {alt} class="object-scale-down h-12" />

                </a>
            </div>
        {/each}
    </div>
    <Footer />
</Page>
