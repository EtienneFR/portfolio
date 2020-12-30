<script>
    import Page from '../components/Page.svelte';

    const projects = [
        {
            href: 'projects',
            src: 'projects/ppe1.png',
            alt: 'ppe1',
            title: 'Projet BTS : Site internet',
            description: `
                Site de demande et de suivi des prêts bancaires pour les
                startups.
            `,
        },
        {
            href: 'projects#ppe2',
            src: 'projects/ppe2.png',
            alt: 'ppe2',
            title: 'Projet BTS : Application',
            description: `
                Logiciel de gestion des demandes de prêts pour les
                startups.
            `,
        },
    ];

    const other = [
        {
            href: 'carrer',
            src: 'carrer/report.svg',
            alt: 'pp',
            title: 'Parcours',
            description: `
                Parcours de professionnalisation
            `,
        },
        {
            href: 'watch',
            src: 'watch/news.svg',
            alt: 'news',
            title: 'Veilles',
            description: `
                Veilles technologiques et juridiques
            `,
        },
    ];
</script>

<svelte:head>
    <title>Etienne Dayre</title>
</svelte:head>

<Page>
    <div class="container m-auto bg-gray-100">
        <div class="lg:w-full text-center m-auto py-8">
            <h1 class="text-blue-600 text-2xl">Etienne Dayre</h1>
            <h2 class=" text-xl">
                Étudiant en Licence 3 MIAGE à l'Université Paris 1 Panthéon -
                Sorbonne
            </h2>
            <h3 class=" text-xl">Apprenti développeur chez Transactis</h3>
        </div>

        <div class="p-4">
            <span class="block text-center px-1 py-1">
                Parce qu'un portfolio n'est rien sans présentation, vous
                trouverez sur le mien l'ensemble de mes réalisations pour les
                épreuves E4 et E6 du BTS. Également mon travail sur mes veilles
                technologiques et juridiques. Ce portfolio est un support pour
                mon porte-feuille de compétences.
            </span>
        </div>

        <div class="flex flex-wrap p-6 justify-around">
            {#each projects as { href, src, alt, title, description }}
                <div
                    class="block w-3/4 sm:max-w-sm rounded overflow-hidden
                    shadow-lg transition duration-100 ease-in-out bg-gray-100
                    hover:bg-gray-200 transform hover:-translate-y-1
                    hover:scale-110 m-8">
                    <a {href}>
                        <img class="w-full h-48" {src} {alt} />
                    </a>
                    <div class="px-3 py-2">
                        <div class="font-bold text-xl mb-2 text-blue-600">
                            {title}
                        </div>
                        <p class="text-gray-700 text-base">{description}</p>
                    </div>
                </div>
            {/each}
        </div>

        <div class="flex flex-wrap p-6 justify-around">
            {#each other as { href, src, alt, title, description }}
                <div
                    class="block w-3/4 sm:max-w-sm rounded overflow-hidden
                    shadow-lg transition duration-100 ease-in-out bg-gray-100
                    hover:bg-gray-200 transform hover:-translate-y-1
                    hover:scale-110 m-8">
                    <a {href}>
                        <img class="w-full h-48" {src} {alt} />
                    </a>
                    <div class="px-3 py-2">
                        <div class="font-bold text-xl mb-2 text-blue-600">
                            {title}
                        </div>
                        <p class="text-gray-700 text-base">{description}</p>
                    </div>
                </div>
            {/each}
        </div>

    </div>
</Page>
