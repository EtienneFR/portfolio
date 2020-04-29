<script>
    let pp = 'pp/report.svg';
</script>

<svelte:head>
    <title>Épreuve E6</title>
</svelte:head>
<div class="w-full bg-gray-100">
    <div class="container m-auto">

        <div class="lg:w-full text-center m-auto py-8">
            <h1 class="text-blue-600 font-mono text-2xl">Mon épreuve E6</h1>

        </div>

        <div class="p-4">
            <span class="block font-mono text-center px-1 py-1">
                Vous retrouverez sur cette page le résumé de mon parcours de
                professionnalisation dans le cadre de l'épreuve E6 du BTS SIO.
            </span>
        </div>

        <div class="flex flex-wrap p-6 justify-around">
            <div
                id="ppe1"
                class="block w-4/5 sm:max-w-sm rounded overflow-hidden shadow-lg
                transition duration-100 ease-in-out bg-gray-100
                hover:bg-gray-200 transform hover:-translate-y-1 hover:scale-110
                m-8">

                <img class="w-full" src={pp} alt="background image" />
                <div class="px-3 py-2">
                    <div class="font-bold font-mono text-xl mb-2 text-blue-600">
                        Épreuve E6
                    </div>
                    <p class="text-gray-700 text-justify font-mono pr-3">
                        Parcours de professionnalisation
                    </p>

                    <ul class="list-disc pt-3 ml-2 font-mono">
                        <li>
                            <a href="pp/tableau.pdf">Tableau de synthèse</a>
                        </li>
                        <li>
                            <a href="pp/presentation.pdf">
                                Présentation parcours
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
