<script>
    import Page from '../components/Page.svelte';

    let src = 'cv.pdf';
    let name = 'cv';

    let src_en_cv = 'english_cv.pdf';
    let en_cv = 'cv_en;';
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
                    Étudiant en Licence 3 MIAGE à l'Université Paris 1 Panthéon
                    - Sorbonne
                </h2>
                <h3 class="font-mono text-xl">
                    Apprenti développeur chez Transactis
                </h3>
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
                <a href={src_en_cv} class="no-underline hover:underline ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="flag-icon-css-gb"
                        viewBox="0 0 512 512"
                        class="inline-block h-8 w-8">
                        <path fill="#012169" d="M0 0h512v512H0z" />
                        <path
                            fill="#FFF"
                            d="M512 0v64L322 256l190 187v69h-67L254 324 68
                            512H0v-68l186-187L0 74V0h62l192 188L440 0z" />
                        <path
                            fill="#C8102E"
                            d="M184 324l11 34L42 512H0v-3l184-185zm124-12l54 8
                            150 147v45L308 312zM512 0L320 196l-4-44L466 0h46zM0
                            1l193 189-59-8L0 49V1z" />
                        <path
                            fill="#FFF"
                            d="M176 0v512h160V0H176zM0 176v160h512V176H0z" />
                        <path
                            fill="#C8102E"
                            d="M0 208v96h512v-96H0zM208 0v512h96V0h-96z" />
                    </svg>
                </a>
            </div>
        </div>
    </div>
</Page>
