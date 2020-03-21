<script>
    let news = 'veilles/news.svg';
    let ppe1 = 'ppe/ppe1.png';
    let ppe2 = 'ppe/ppe2.png';
    let pp = 'pp/report.svg';
</script>

<svelte:head>
    <title>Etienne Dayre</title>
</svelte:head>
<div class="w-full bg-gray-100">
    <div class="container m-auto">

        <div class="lg:w-full text-center m-auto py-8">
            <h1 class="text-blue-600 font-mono text-2xl">Etienne Dayre</h1>
            <h2 class="font-mono text-xl">
                Étudiant en BTS SIO option SLAM / apprenti développeur chez
                Transactis
            </h2>
        </div>

        <div class="p-4">
            <span class="block font-mono text-center px-1 py-1">
                Parce qu'un portfolio n'est rien sans présentation, vous
                trouverez sur le mien l'ensemble de mes réalisations pour les
                épreuves E4 et E6 du BTS. Également mon travail sur mes veilles
                technologiques et juridiques. Ce portfolio est un support pour
                mon porte-feuille de compétences.
            </span>
        </div>

        <div class="flex flex-wrap p-6 justify-around">
            <a
                href="e4"
                class="block w-3/4 sm:max-w-sm rounded overflow-hidden shadow-lg
                transition duration-100 ease-in-out bg-gray-100
                hover:bg-gray-200 transform hover:-translate-y-1 hover:scale-110
                m-8">

                <img class="w-full h-48" src={ppe1} alt="background image" />
                <div class="px-3 py-2">
                    <div class="font-bold font-mono text-xl mb-2 text-blue-600">
                        Épreuve E4 : PPE1
                    </div>
                    <p class="text-gray-700 text-base font-mono">
                        Site internet innovSGs de demande et suivi des prêts
                        bancaires pour startup.
                    </p>
                </div>
            </a>
            <a
                href="e4#ppe2"
                class="block w-3/4 sm:max-w-sm rounded overflow-hidden shadow-lg
                transition duration-100 ease-in-out bg-gray-100
                hover:bg-gray-200 transform hover:-translate-y-1 hover:scale-110
                m-8">

                <img class="w-full h-48" src={ppe2} alt="background image" />
                <div class="px-3 py-2">
                    <div class="font-bold font-mono text-xl mb-2 text-blue-600">
                        Épreuve E4 : PPE2
                    </div>
                    <p class="text-gray-700 text-base font-mono">
                        Logiciel innovSGs de gestion des demandes de prêts pour
                        startup.
                    </p>
                </div>
            </a>
        </div>

        <div class="flex flex-wrap p-6 justify-around">
            <a
                href="e6"
                class="block w-3/4 sm:max-w-sm rounded overflow-hidden shadow-lg
                transition duration-100 ease-in-out bg-gray-100
                hover:bg-gray-200 transform hover:-translate-y-1 hover:scale-110
                m-8">

                <img class="w-full h-48" src={pp} alt="background image" />
                <div class="px-3 py-2">
                    <div class="font-bold font-mono text-xl mb-2 text-blue-600">
                        Épreuve E6
                    </div>
                    <p class="text-gray-700 text-base font-mono">
                        Parcours de professionnalisation
                    </p>
                </div>
            </a>
            <a
                href="veilles"
                class="block w-3/4 sm:max-w-sm rounded overflow-hidden shadow-lg
                transition duration-100 ease-in-out bg-gray-100
                hover:bg-gray-200 transform hover:-translate-y-1 hover:scale-110
                m-8">

                <img class="w-full h-48" src={news} alt="background image" />
                <div class="px-3 py-2">
                    <div class="font-bold font-mono text-xl mb-2 text-blue-600">
                        Veilles
                    </div>
                    <p class="text-gray-700 text-base font-mono">
                        Veilles technologiques et juridiques
                    </p>
                </div>
            </a>
        </div>
    </div>
</div>
