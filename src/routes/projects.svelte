<script>
    import Page from '../components/Page.svelte';
    import Cards from '../components/Cards';

    const ppe = [
        {
            id: 'ppe1',
            src: 'projects/ppe1.png',
            alt: 'ppe1',
            title: 'Application web : Demande de prêts bancaires',
            content: `
                Dans le cadre de la mise en place d’une nouvelle offre
                de prêts bancaires pour les startups, Société Générale
                souhaite mettre en ligne une solution sous forme d’un
                site internet permettant de proposer et de gérer les
                demandes des entreprises innovantes avec une
                administration personnalisée des demandes de prêts
                bancaires pour les commerciaux et les directeurs
                d’agences.
            `,
        },
        {
            id: 'ppe2',
            src: 'projects/ppe2.png',
            alt: 'ppe2',
            title: 'Logiciel : Gestion de prêts bancaires',
            content: `
                Depuis la mise en ligne du site innovSGs permettant de
                répondre aux différentes demandes des entreprises
                clientes en matière de prêts bancaires, Société Générale
                souhaite sécuriser la gestion des prêts bancaires du
                côté des commerciaux. Les commerciaux seront les seuls
                utilisateurs du logiciel.
            `,
        },
    ];
</script>

<svelte:head>
    <title>Etienne Dayre | Projets</title>
</svelte:head>

<Page>
    <div class="container m-auto bg-gray-100">

        <div class="lg:w-full text-center m-auto py-8">
            <h1 class="text-blue-600 dark:text-green-600 text-2xl">Projets</h1>
        </div>

        <span class="block text-center px-1 py-1">
            Les deux projets dans le cadre du BTS SIO.
        </span>

        <Cards class="flex flex-col p-6 items-center" {ppe} />
    </div>
</Page>
