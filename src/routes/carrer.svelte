<script>
    import Page from '../components/Page.svelte';
    import CardClickable from '../components/CardClickable';

    const carrer = [
        {
            id: 'pp',
            href: 'carrer/presentation.pdf',
            src: 'carrer/report.svg',
            alt: 'presentation',
            title: 'Mon parcours',
            content: 'Présentation de mon parcours depuis le BTS',
        },
    ];
</script>

<svelte:head>
    <title>Etienne Dayre | Parcours</title>
</svelte:head>
<Page>
    <div class="container m-auto">
        <div class="py-8 m-auto text-center lg:w-full">
            <h1 class="text-2xl text-blue-600">Parcours Professionnel</h1>
        </div>
        <span class="block px-1 py-1 text-center">
            Un bref apperçu de mes expériences, stages, projets...
        </span>
        <div class="flex flex-col items-center p-6">
            {#each carrer as { id, href, src, alt, title, content }}
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
