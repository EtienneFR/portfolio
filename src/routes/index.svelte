<script>
    import Page from '../components/Page.svelte';
    import CardClickable from '../components/CardClickable.svelte';

    import { onMount } from 'svelte';

    onMount(() => {
        if (window.netlifyIdentity) {
            window.netlifyIdentity.on('init', user => {
                if (!user) {
                    window.netlifyIdentity.on('login', () => {
                        document.location.href = '/admin/';
                    });
                }
            });
        }
    });

    const projects = [
        {
            id: 1,
            href: 'projects',
            src: 'projects/ppe1.png',
            alt: 'ppe1',
            title: 'Projet BTS : Site internet',
            content: `
                Site de demande et de suivi des prêts bancaires pour les
                startups.
            `,
        },
        {
            id: 2,
            href: 'projects#ppe2',
            src: 'projects/ppe2.png',
            alt: 'ppe2',
            title: 'Projet BTS : Application',
            content: `
                Logiciel de gestion des demandes de prêts pour les
                startups.
            `,
        },
    ];

    const other = [
        {
            id: 3,
            href: 'carrer',
            src: 'carrer/report.svg',
            alt: 'pp',
            title: 'Parcours',
            content: `
                Parcours de professionnalisation depuis mon BTS
            `,
        },
        {
            id: 4,
            href: 'watch',
            src: 'watch/news.svg',
            alt: 'news',
            title: 'Veilles',
            content: `
                Veilles technologiques et juridiques en lien avec l'épreuve de BTS
            `,
        },
    ];
</script>

<svelte:head>
    <title>Etienne Dayre</title>
    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js">

    </script>
</svelte:head>

<Page>
    <div class="container m-auto">
        <div class="py-8 m-auto text-center lg:w-full">
            <h1 class="text-2xl text-blue-600">Etienne Dayre</h1>
            <h2 class="text-xl ">
                Étudiant en Licence 3 MIAGE à l'Université Paris 1 Panthéon -
                Sorbonne
            </h2>
            <h3 class="text-xl ">Apprenti développeur chez Transactis</h3>
        </div>

        <div class="p-4">
            <span class="block px-1 py-1 text-center">
                Parce qu'un portfolio n'est rien sans présentation, vous
                trouverez sur le mien l'ensemble de mes réalisations et projets,
                ainsi que mon travail sur les veilles technologiques et
                juridiques.
            </span>
        </div>

        <div class="flex flex-wrap justify-around p-6">
            {#each projects as { id, href, src, alt, title, content }}
                <CardClickable
                    class="w-full h-48"
                    {id}
                    {href}
                    {src}
                    {alt}
                    {title}
                    {content} />
            {/each}
        </div>

        <div class="flex flex-wrap justify-around p-6">
            {#each other as { id, href, src, alt, title, content }}
                <CardClickable
                    class="w-full h-48"
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
