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
                trouverez sur le mien l'ensemble de mes réalisations pour les
                épreuves E4 et E6 du BTS. Également mon travail sur mes veilles
                technologiques et juridiques. Ce portfolio est un support pour
                mon porte-feuille de compétences.
            </span>
        </div>

        <div class="flex flex-wrap justify-around p-6">
            {#each projects as { href, src, alt, title, description }}
                <div
                    class="block w-3/4 m-8 overflow-hidden transition duration-100 ease-in-out transform bg-gray-100 rounded shadow-lg sm:max-w-sm hover:bg-gray-200 hover:-translate-y-1 hover:scale-110">
                    <a {href}>
                        <img class="w-full h-48" {src} {alt} />
                    </a>
                    <div class="px-3 py-2">
                        <div class="mb-2 text-xl font-bold text-blue-600">
                            {title}
                        </div>
                        <p class="text-base text-gray-700">{description}</p>
                    </div>
                </div>
            {/each}
        </div>

        <div class="flex flex-wrap justify-around p-6">
            {#each other as { href, src, alt, title, description }}
                <div
                    class="block w-3/4 m-8 overflow-hidden transition duration-100 ease-in-out transform bg-gray-100 rounded shadow-lg sm:max-w-sm hover:bg-gray-200 hover:-translate-y-1 hover:scale-110">
                    <a {href}>
                        <img class="w-full h-48" {src} {alt} />
                    </a>
                    <div class="px-3 py-2">
                        <div class="mb-2 text-xl font-bold text-blue-600">
                            {title}
                        </div>
                        <p class="text-base text-gray-700">{description}</p>
                    </div>
                </div>
            {/each}
        </div>

    </div>
</Page>
