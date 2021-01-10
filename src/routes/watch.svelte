<script>
    import Page from '../components/Page.svelte';
    import CardClickable from '../components/CardClickable';

    const watchs = [
        {
            id: 'tech',
            href: 'watch/veille-techno.pdf',
            src: 'watch/car.svg',
            alt: 'car',
            title: 'Veille Technologique',
            content: 'Voitures connectées et technologies autour de la voiture',
        },
        {
            id: 'law',
            href: 'watch/veille-juridique.pdf',
            src: 'watch/lawyer.svg',
            alt: 'lawyer',
            title: 'Veille Juridique',
            content: 'Contrats et productions de services informatiques',
        },
    ];
</script>

<svelte:head>
    <title>Etienne Dayre | Veilles</title>
</svelte:head>
<Page>
    <div class="container m-auto">
        <div class="py-8 m-auto text-center lg:w-full">
            <h1 class="text-2xl text-blue-600">Mes veilles</h1>
        </div>
        <span class="block px-1 py-1 text-center">
            Veille technologique sur les voitures connectées et veille juridique
            sur les contrats et fournitures de services informatiques
        </span>
        <div class="flex flex-col items-center p-6">
            {#each watchs as { id, href, src, alt, title, content }}
                <CardClickable
                    class="object-scale-down w-full h-32"
                    {id}
                    {href}
                    {src}
                    {alt}
                    {title}
                    {content} />
            {/each}
        </div>
    </div>
</Page>
