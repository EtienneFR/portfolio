<script>
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

    import Page from '$lib/Page.svelte';
    import CardClickable from '$lib/Card/CardClickable.svelte';

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
            <h2 class="text-xl">Développeur Web Full Stack</h2>
        </div>

        <div class="p-4">
            <span class="block px-1 py-1 text-center">
                Parce qu'un portfolio n'est rien sans présentation, vous
                trouverez sur le mien l'ensemble de mes réalisations et projets.
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
    </div>
</Page>
