<script>
    import Page from '../components/Page.svelte';

    const watchs = [
        {
            href: 'watch/veille-techno.pdf',
            src: 'watch/car.svg',
            alt: 'car',
            title: 'Veille Technologique',
            description: 'Voitures connectées',
        },
        {
            href: 'watch/veille-juridique.pdf',
            src: 'watch/lawyer.svg',
            alt: 'lawyer',
            title: 'Veille Juridique',
            description: 'Contrats et productions de services informatiques',
        },
    ];
</script>

<svelte:head>
    <title>Etienne Dayre | Veilles</title>
</svelte:head>
<Page>
    <div class="container m-auto bg-gray-100">
        <div class="lg:w-full text-center m-auto py-8">
            <h1 class="text-blue-600 text-2xl">Mes veilles</h1>
        </div>
        <div class="flex flex-col p-6 items-center">
            {#each watchs as { href, src, alt, title, description }}
                <div
                    class="block w-4/5 sm:max-w-sm rounded overflow-hidden
                    shadow-lg transition duration-100 ease-in-out bg-gray-100
                    hover:bg-gray-200 transform hover:-translate-y-1
                    hover:scale-110 m-8">
                    <a {href}>
                        <img
                            class="w-full object-scale-down h-32"
                            {src}
                            {alt} />
                    </a>
                    <div class="px-3 py-2">
                        <div class="font-bold text-xl mb-2 text-blue-600">
                            {title}
                        </div>
                        <p class="text-gray-700 text-base ">{description}</p>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</Page>
