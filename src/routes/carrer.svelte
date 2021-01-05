<script>
    import Page from '../components/Page.svelte';
    import CardsClickable from '../components/CardsClickable';

    const data = [
        {
            id: 'pp',
            href: 'carrer/presentation.pdf',
            src: 'carrer/report.svg',
            alt: 'presentation',
            title: 'Mon parcours',
            description: 'Présentation de mon parcours depuis le BTS',
        },
    ];
</script>

<svelte:head>
    <title>Etienne Dayre | Parcours</title>
</svelte:head>
<Page>
    <div class="container m-auto bg-gray-100">
        <div class="py-8 m-auto text-center lg:w-full">
            <h1 class="text-2xl text-blue-600">Parcours Professionnel</h1>
        </div>
        <span class="block px-1 py-1 text-center">
            Un bref apperçu de mes expériences, stages, projets...
        </span>
        <CardsClickable class="flex flex-col items-center p-6" {data} />
    </div>
</Page>
