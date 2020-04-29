<script>
    let ppe1 = 'ppe/ppe1.png';
    let ppe2 = 'ppe/ppe2.png';

    let github = 'github.svg';
</script>

<svelte:head>
    <title>Épreuve E4</title>
</svelte:head>
<div class="w-full bg-gray-100">
    <div class="container m-auto">

        <div class="lg:w-full text-center m-auto py-8">
            <h1 class="text-blue-600 font-mono text-2xl">Mon épreuve E4</h1>

        </div>

        <div class="p-4">
            <span class="block font-mono text-center px-1 py-1">
                Vous retrouverez sur cette page le résumé de mes deux PPE dans
                le cadre de l'épreuve E4 du BTS SIO.
            </span>
        </div>

        <div class="flex flex-wrap p-6 justify-around">
            <div
                id="ppe1"
                class="block w-4/5 sm:max-w-sm rounded overflow-hidden shadow-lg
                transition duration-100 ease-in-out bg-gray-100
                hover:bg-gray-200 transform hover:-translate-y-1 hover:scale-110
                m-8">

                <img class="w-full" src={ppe1} alt="background image" />
                <div class="px-3 py-2">
                    <div class="font-bold font-mono text-xl mb-2 text-blue-600">
                        Épreuve E4 : PPE1
                    </div>
                    <p class="text-gray-700 text-justify font-mono pr-3">
                        Dans le cadre de la mise en place d’une nouvelle offre
                        de prêts bancaires pour les startups, Société Générale
                        souhaite mettre en ligne une solution sous forme d’un
                        site internet permettant de proposer et de gérer les
                        demandes des entreprises innovantes avec une
                        administration personnalisée des demandes de prêts
                        bancaires pour les commerciaux et les directeurs
                        d’agences.
                    </p>

                </div>
            </div>
            <div
                id="ppe2"
                class="block w-3/4 sm:max-w-sm rounded overflow-hidden shadow-lg
                transition duration-100 ease-in-out bg-gray-100
                hover:bg-gray-200 transform hover:-translate-y-1 hover:scale-110
                m-8">

                <img class="w-full h-48" src={ppe2} alt="background image" />
                <div class="px-3 py-2">
                    <div class="font-bold font-mono text-xl mb-2 text-blue-600">
                        Épreuve E4 : PPE2
                    </div>
                    <p class="text-gray-700 text-justify font-mono pr-3">
                        Depuis la mise en ligne du site innovSGs permettant de
                        répondre aux différentes demandes des entreprises
                        clientes en matière de prêts bancaires, Société Générale
                        souhaite sécuriser la gestion des prêts bancaires du
                        côté des commerciaux. Les commerciaux seront les seuls
                        utilisateurs du logiciel.
                    </p>
                </div>
            </div>
        </div>

    </div>
</div>
