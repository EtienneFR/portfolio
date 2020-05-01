<script>
    let car = 'veilles/car.svg';
    let law = 'veilles/lawyer.svg';
    let paperclip = 'veilles/paperclip.svg';
</script>

<svelte:head>
    <title>Etienne DAYRE | Veilles</title>
</svelte:head>
<div class="w-full bg-gray-100">
    <div class="container m-auto">
        <div class="lg:w-full text-center m-auto py-8">
            <h1 class="text-blue-600 font-mono text-2xl">Mes veilles</h1>
        </div>
        <div class="flex flex-wrap p-6 justify-around">
            <div class="w-auto">
                <div
                    class="block w-full sm:max-w-sm rounded overflow-hidden
                    shadow-lg transition duration-100 ease-in-out bg-gray-100
                    hover:bg-gray-200 transform hover:-translate-y-1
                    hover:scale-110 my-8 px-2">

                    <img
                        class="w-full object-scale-down h-32"
                        src={car}
                        alt="car" />
                    <div class="px-3 py-2">
                        <div
                            class="font-bold font-mono text-xl mb-2
                            text-blue-600">
                            Veille Technologique
                        </div>
                        <p class="text-gray-700 text-base font-mono">
                            Voitures connectées
                        </p>
                        <a href="veilles/veille-techno.pdf">
                            <svg
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                class="inline-block h-10 w-10 pt-2">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M15.172 7l-6.586 6.586a2 2 0 102.828
                                    2.828l6.414-6.586a4 4 0
                                    00-5.656-5.656l-6.415 6.585a6 6 0 108.486
                                    8.486L20.5 13" />
                            </svg>
                        </a>
                    </div>

                </div>
                <div
                    class="block w-full sm:max-w-sm rounded overflow-hidden
                    shadow-lg transition duration-100 ease-in-out bg-gray-100
                    hover:bg-gray-200 transform hover:-translate-y-1
                    hover:scale-110 my-8 px-2">

                    <img
                        class="w-full object-scale-down h-32"
                        src={car}
                        alt="car" />
                    <div class="px-3 py-2">
                        <div
                            class="font-bold font-mono text-xl mb-2
                            text-blue-600">
                            Veille Juridique
                        </div>
                        <p class="text-gray-700 text-base font-mono">
                            Contrats et productions de services informatiques
                        </p>
                        <a href="veilles/veille-juridique.pdf">
                            <svg
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                class="inline-block h-10 w-10 pt-2">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M15.172 7l-6.586 6.586a2 2 0 102.828
                                    2.828l6.414-6.586a4 4 0
                                    00-5.656-5.656l-6.415 6.585a6 6 0 108.486
                                    8.486L20.5 13" />
                            </svg>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
