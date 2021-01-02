<script>
    import Page from '../components/Page.svelte';

    let pp = 'carrer/report.svg';

    let presentation = 'carrer/presentation.pdf';
    let namePresentation = 'presentation';
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
            Un bref apperçu de mes expériences, stages, projets...
        </span>

        <div class="flex flex-wrap p-6 justify-around">
            <div
                id="ppe1"
                class="block w-4/5 sm:max-w-sm rounded overflow-hidden shadow-lg
                transition duration-100 ease-in-out bg-gray-100
                hover:bg-gray-200 transform hover:-translate-y-1 hover:scale-110
                m-8">
                <a href={presentation}>
                    <img class="w-full" src={pp} alt={namePresentation} />
                </a>
                <div class="px-3 py-2">
                    <div class="font-bold text-xl mb-2 text-blue-600">
                        Mon parcours
                    </div>
                    <p class="text-gray-700 text-justify pr-3">
                        Présentation de mon parcours depuis le BTS
                    </p>
                </div>
            </div>
        </div>
    </div>
</Page>
