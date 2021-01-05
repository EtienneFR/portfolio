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
        <div class="py-8 m-auto text-center lg:w-full">
            <h1 class="text-2xl text-blue-600">Mes veilles</h1>
        </div>
        <CardsClickable class="flex flex-col items-center p-6" {data} />
    </div>
</Page>
