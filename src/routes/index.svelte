<script>
    let src = 'great-success.png';
</script>

<!-- <style>
	h1, figure, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style> -->
<svelte:head>
    <title>Sapper project template</title>
</svelte:head>

<div class="w-full bg-gray-100">
    <h1 class="flex justify-center p-2">
        Etienne Dayre, étudiant en BTS SIO option SLAM
    </h1>

    <div class="bg-gray-100 p-4">
        <span
            class="block text-gray-600 text-center bg-gray-100 px-1 py-1 border
            rounded-lg">
            Parce qu'un portfolio n'est rien sans présentation, vous trouverez
            sur le mien l'ensemble de mes réalisations pour les épreuves E4 et
            E6 du BTS. Également mon travail sur mes veilles technologiques et
            juridiques.
        </span>
    </div>

    <div class="flex flex-wrap p-2 justify-around">
        <a
            href="e4"
            class="block w-full sm:max-w-sm rounded overflow-hidden shadow-lg
            transition duration-200 ease-in-out bg-gray-100 hover:bg-gray-200
            transform hover:-translate-y-1 hover:scale-110 m-3 px-3">

            <img class="w-full" {src} alt="background image" />
            <div class="px-3 py-2">
                <div class="font-bold text-xl mb-2">Épreuve E4 : PPE1</div>
                <p class="text-gray-700 text-base">Description here !</p>
            </div>
        </a>
        <a
            href="e4"
            class="block w-full sm:max-w-sm rounded overflow-hidden shadow-lg
            transition duration-200 ease-in-out bg-gray-100 hover:bg-gray-200
            transform hover:-translate-y-1 hover:scale-110 m-3 px-2">

            <img class="w-full" {src} alt="background image" />
            <div class="px-3 py-2">
                <div class="font-bold text-xl mb-2">Épreuve E4 : PPE2</div>
                <p class="text-gray-700 text-base">Description here !</p>
            </div>
        </a>
    </div>
</div>
