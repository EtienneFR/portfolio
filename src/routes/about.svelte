<script>
    import Page from '../components/Page.svelte';

    let src = 'cv.pdf';
    let name = 'cv';

    let src_en_cv = 'english_cv.pdf';
    let en_cv = 'cv_en;';

    let fr_flag = 'fr_flag.svg';
    let fr_flag_icon = 'fr_cv';

    let uk_flag = 'uk_flag.svg';
    let uk_flag_icon = 'uk_cv';
</script>

<svelte:head>
    <title>Etienne Dayre | À propos</title>
</svelte:head>
<Page>
    <div class="container m-auto">
        <div class="flex flex-wrap mt-8 lg:space-x-10">
            <div class="text-center lg:flex-1 sm:w-full lg:text-left">
                <h1 class="text-2xl text-blue-600">Etienne Dayre</h1>
                <h2 class="text-xl">
                    Étudiant en Licence MIAGE Université Paris 1 Panthéon -
                    Sorbonne
                </h2>
                <h3 class="text-xl ">Apprenti développeur chez Transactis</h3>
            </div>
            <div
                class="px-2 mt-10 text-center lg:flex-1 sm:w-full lg:text-right">
                Sur l'ensemble de mon portfolio, j'ai fait ressortir mes
                qualités et ma passion pour le monde du développement web et
                plus généralement de l'informatique. Au cours de mes expériences
                en alternance, je continue de me forger de nombreuses
                compétences.
            </div>
            <div class="w-full p-8 text-center">
                <div class="inline-block pr-3 text-2xl text-blue-600">CV</div>
                <a
                    href={src}
                    target="_blank"
                    class="no-underline hover:underline ">
                    <img
                        src={fr_flag}
                        alt={fr_flag_icon}
                        class="inline-block object-scale-down h-12" />
                </a>
                <a
                    href={src_en_cv}
                    target="_blank"
                    class="no-underline hover:underline">
                    <img
                        src={uk_flag}
                        alt={uk_flag_icon}
                        class="inline-block object-scale-down h-12" />
                </a>
            </div>
        </div>
    </div>
</Page>
