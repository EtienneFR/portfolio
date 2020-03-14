<script>
    let car = 'veilles/car.svg';
    let law = 'veilles/lawyer.svg';
</script>

<svelte:head>
    <title>Veilles</title>
</svelte:head>
<div class="w-full bg-gray-100">
    <div class="container" />
    <div class="flex flex-wrap p-6 my-32 justify-around">
        <div class="w-auto">
            <a
                href="veilles/veille-techno.pdf"
                class="block w-full sm:max-w-sm rounded overflow-hidden
                shadow-lg transition duration-100 ease-in-out bg-gray-100
                hover:bg-gray-200 transform hover:-translate-y-1 hover:scale-110
                my-8 px-2">

                <img
                    class="w-full object-scale-down h-32"
                    src={car}
                    alt="car" />
                <div class="px-3 py-2">
                    <div class="font-bold text-xl mb-2 text-blue-600">
                        Veille Technologique
                    </div>
                    <p class="text-gray-700 text-base">Voitures connectées</p>
                </div>
            </a>

            <a
                href="veilles/veille-juridique.pdf"
                class="block w-full sm:max-w-sm rounded overflow-hidden
                shadow-lg transition duration-100 ease-in-out bg-gray-100
                hover:bg-gray-200 transform hover:-translate-y-1 hover:scale-110
                my-8 px-2">

                <img
                    class="w-full object-scale-down h-32"
                    src={law}
                    alt="car" />
                <div class="px-3 py-2">
                    <div class="font-bold text-xl mb-2 text-blue-600">
                        Veille Juridique
                    </div>
                    <p class="text-gray-700 text-base">
                        Contrats et productions de services informatiques
                    </p>
                </div>
            </a>
        </div>
    </div>
</div>
