<script>
    import Page from '../components/Page.svelte';

    let pp = 'pp/report.svg';
</script>

<svelte:head>
    <title>Etienne Dayre | Parcours</title>
</svelte:head>
<Page>
    <div class="container m-auto bg-gray-100">
        <div class="lg:w-full text-center m-auto py-8">
            <h1 class="text-blue-600 text-2xl">Parcours Professionnel</h1>

        </div>

        <span class="block text-center px-1 py-1">
            Parcours de professionnalisation dans le cadre de l'épreuve E6 du
            BTS SIO.
        </span>

        <div class="flex flex-wrap p-6 justify-around">
            <div
                id="ppe1"
                class="block w-4/5 sm:max-w-sm rounded overflow-hidden shadow-lg
                transition duration-100 ease-in-out bg-gray-100
                hover:bg-gray-200 transform hover:-translate-y-1 hover:scale-110
                m-8">
                <a href="pp/presentation.pdf">
                    <img class="w-full" src={pp} alt="background image" />
                </a>
                <div class="px-3 py-2">
                    <div class="font-bold text-xl mb-2 text-blue-600">
                        Épreuve E6
                    </div>
                    <p class="text-gray-700 text-justify pr-3">
                        Parcours de professionnalisation
                    </p>

                    <ul class="list-disc pt-2 ml-2">
                        <li>
                            <a href="pp/tableau.pdf ">Tableau de Synthèse</a>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    </div>
</Page>
