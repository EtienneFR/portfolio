<script>
    let src = 'cv.pdf';
    let name = 'cv';
</script>

<svelte:head>
    <title>À propos</title>
</svelte:head>

<div class="w-full bg-gray-100">
    <div class="container m-auto">
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
                <a href={src} class="no-underline hover:underline ">
                    Mon Curriculum Vitae
                </a>
            </div>
            <div class="sm:w-full p-8">
                <p class="text-justify lg:text-center font-mono">
                    Ce portfolio a été réalisé à l'aide des technologies Sapper
                    et TailwindCSS. Simple. Basique.
                </p>
            </div>
        </div>
    </div>
</div>
