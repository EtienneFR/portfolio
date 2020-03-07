<script>
    let src = 'great-success.png';
</script>

<svelte:head>
    <title>Portfolio d'Etienne Dayre</title>
</svelte:head>
<div class="w-full bg-gray-100">
    <div class="container m-auto">

        <div class="lg:w-full text-center m-auto lg:py-8">
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
                technologiques et juridiques. Ce portfolio est un support de mon
                porte-feuille de compétences.
            </span>
        </div>

        <div class="flex flex-wrap p-2 justify-around">
            <a
                href="e4"
                class="block w-full sm:max-w-sm rounded overflow-hidden
                shadow-lg transition duration-200 ease-in-out bg-gray-100
                hover:bg-gray-200 transform hover:-translate-y-1 hover:scale-110
                m-3 px-3">

                <img class="w-full" {src} alt="background image" />
                <div class="px-3 py-2">
                    <div class="font-bold text-xl mb-2">Épreuve E4 : PPE1</div>
                    <p class="text-gray-700 text-base">Description here !</p>
                </div>
            </a>
            <a
                href="e4"
                class="block w-full sm:max-w-sm rounded overflow-hidden
                shadow-lg transition duration-200 ease-in-out bg-gray-100
                hover:bg-gray-200 transform hover:-translate-y-1 hover:scale-110
                m-3 px-2">

                <img class="w-full" {src} alt="background image" />
                <div class="px-3 py-2">
                    <div class="font-bold text-xl mb-2">Épreuve E4 : PPE2</div>
                    <p class="text-gray-700 text-base">Description here !</p>
                </div>
            </a>
        </div>

        <div class="flex flex-wrap p-2 justify-around">
            <a
                href="e6"
                class="block w-full sm:max-w-sm rounded overflow-hidden
                shadow-lg transition duration-200 ease-in-out bg-gray-100
                hover:bg-gray-200 transform hover:-translate-y-1 hover:scale-110
                m-3 px-3">

                <img class="w-full" {src} alt="background image" />
                <div class="px-3 py-2">
                    <div class="font-bold text-xl mb-2">Épreuve E6</div>
                    <p class="text-gray-700 text-base">Description here !</p>
                </div>
            </a>
            <a
                href="veilles"
                class="block w-full sm:max-w-sm rounded overflow-hidden
                shadow-lg transition duration-200 ease-in-out bg-gray-100
                hover:bg-gray-200 transform hover:-translate-y-1 hover:scale-110
                m-3 px-2">

                <img class="w-full" {src} alt="background image" />
                <div class="px-3 py-2">
                    <div class="font-bold text-xl mb-2">Veilles</div>
                    <p class="text-gray-700 text-base">Description here !</p>
                </div>
            </a>
        </div>
    </div>
</div>
