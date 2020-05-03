<script>
    import Page from '../components/Page.svelte';

    let src = 'cv.pdf';
    let name = 'cv';
</script>

<svelte:head>
    <title>Etienne Dayre | À propos</title>
</svelte:head>
<Page>
    <div class="container m-auto bg-gray-100">
        <div class="flex flex-wrap">
            <div class="lg:w-full text-center py-8">
                <h1 class="text-blue-600 font-mono text-2xl">Etienne Dayre</h1>
                <h2 class="font-mono text-xl">
                    Étudiant en BTS SIO option SLAM / apprenti développeur chez
                    Transactis
                </h2>
            </div>
            <div class="sm:w-full p-8">
                <p class="text-justify lg:text-center font-mono">
                    Sur l'ensemble de mon portfolio, j'ai fait ressortir mes
                    qualités et ma passion pour le monde du développement web et
                    plus généralement de l'informatique. Au cours de mon année
                    d'alternance, j'ai pu appréhender et comprendre les enjeux
                    d'un projet informatique.
                </p>
            </div>
            <div class="sm:w-full p-8">
                <p class="text-justify lg:text-center font-mono">
                    Les sections de ce portfolio permettront d'en apprendre plus
                    sur mes compétences et les projets pour les épreuves E4 et
                    E6 du BTS SIO option SLAM.
                </p>
            </div>
            <div class="sm:w-full text-justify lg:text-center font-mono p-8 ">
                Mon Curriculum Vitae
                <a href={src} class="no-underline hover:underline ">
                    <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="inline-block h-8 w-8">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15.172 7l-6.586 6.586a2 2 0 102.828
                            2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415
                            6.585a6 6 0 108.486 8.486L20.5 13" />
                    </svg>
                </a>
            </div>
        </div>
    </div>
</Page>
