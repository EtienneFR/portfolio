<script>
    import Page from '../components/Page.svelte';

    let news = 'veilles/news.svg';
    let nameNews = 'news';

    let ppe1 = 'ppe/ppe1.png';
    let namePpe1 = 'ppe1';

    let ppe2 = 'ppe/ppe2.png';
    let namePpe2 = 'ppe2';

    let pp = 'pp/report.svg';
    let namePp = 'pp';
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
            <div
                class="block w-3/4 sm:max-w-sm rounded overflow-hidden shadow-lg
                transition duration-100 ease-in-out bg-gray-100
                hover:bg-gray-200 transform hover:-translate-y-1 hover:scale-110
                m-8">
                <a href="projects">
                    <img class="w-full h-48" src={ppe1} alt={namePpe1} />
                </a>
                <div class="px-3 py-2">
                    <div class="font-bold text-xl mb-2 text-blue-600">
                        Projet BTS : Site internet
                    </div>
                    <p class="text-gray-700 text-base">
                        Site de demande et de suivi des prêts bancaires pour les
                        startups.
                    </p>
                </div>
            </div>
            <div
                class="block w-3/4 sm:max-w-sm rounded overflow-hidden shadow-lg
                transition duration-100 ease-in-out bg-gray-100
                hover:bg-gray-200 transform hover:-translate-y-1 hover:scale-110
                m-8">
                <a href="projects#ppe2">
                    <img class="w-full h-48" src={ppe2} alt={namePpe1} />
                </a>
                <div class="px-3 py-2">
                    <div class="font-bold text-xl mb-2 text-blue-600">
                        Projet BTS : Application
                    </div>
                    <p class="text-gray-700 text-base">
                        Logiciel de gestion des demandes de prêts pour les
                        startups.
                    </p>
                </div>
            </div>

        </div>

        <div class="flex flex-wrap p-6 justify-around">
            <div
                class="block w-3/4 sm:max-w-sm rounded overflow-hidden shadow-lg
                transition duration-100 ease-in-out bg-gray-100
                hover:bg-gray-200 transform hover:-translate-y-1 hover:scale-110
                m-8">
                <a href="carrer">
                    <img class="w-full h-48" src={pp} alt={namePp} />
                </a>
                <div class="px-3 py-2">
                    <div class="font-bold text-xl mb-2 text-blue-600">
                        Parcours
                    </div>
                    <p class="text-gray-700 text-base">
                        Parcours de professionnalisation
                    </p>
                </div>
            </div>
            <div
                class="block w-3/4 sm:max-w-sm rounded overflow-hidden shadow-lg
                transition duration-100 ease-in-out bg-gray-100
                hover:bg-gray-200 transform hover:-translate-y-1 hover:scale-110
                m-8">
                <a href="watch">

                    <img class="w-full h-48" src={news} alt={nameNews} />
                </a>
                <div class="px-3 py-2">
                    <div class="font-bold text-xl mb-2 text-blue-600">
                        Veilles
                    </div>
                    <p class="text-gray-700 text-base">
                        Veilles technologiques et juridiques
                    </p>
                </div>
            </div>

        </div>
    </div>
</Page>
