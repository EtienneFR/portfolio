<script>
    import Page from '../components/Page.svelte';
    import CardsClickable from '../components/CardsClickable';

    const data = [
        {
            id: 'tech',
            href: 'watch/veille-techno.pdf',
            src: 'watch/car.svg',
            alt: 'car',
            title: 'Veille Technologique',
            description: 'Voitures connectées',
        },
        {
            id: 'law',
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
        <CardsClickable class="flex flex-col p-6 items-center" {data} />
    </div>
</Page>
