<script>
    let src = 'great-success.png';
    let name = 'Etienne Dayre';
</script>

<svelte:head>
    <title>À propos</title>
</svelte:head>

<div class="w-full bg-gray-100">
    <div class="container m-auto">
        <div class="flex flex-wrap">

            <div class="w-full p-8">
                <img
                    {src}
                    alt={name}
                    class="m-auto text-center rounded-full object-scale-down
                    h-64" />
            </div>
            <div class="lg:w-full text-center m-auto lg:py-8">
                <h1 class="text-blue-600 font-mono text-2xl">Etienne Dayre</h1>
                <h2 class="font-mono text-xl">
                    Étudiant en BTS SIO option SLAM / apprenti développeur chez
                    Transactis
                </h2>
            </div>
            <div class="sm:w-full p-8">
                <p class="text-justify lg:text-center font-mono">
                    Sur l'ensemble de mon portfolio, j'ai fait ressortir mes
                    qualités et ma passion pour le monde du développement. Au
                    cours de mon année d'alternance, j'ai pu appréhender et
                    comprendre les enjeux d'un projet informatique.
                </p>
            </div>
            <div class="sm:w-full p-8">
                <p class="text-justify lg:text-center font-mono">
                    Les sections de ce portfolio permettront d'en apprendre plus
                    sur mes compétences et les projets pour les épreuves E4 et
                    E6 du BTS SIO option SLAM.
                </p>
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
