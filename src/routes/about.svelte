<script>
    import Page from '../components/Page.svelte';
    import DropdownOption from '../components/DropdownOption.svelte';

    const title = 'CV';

    const cv = [
        {
            src: 'cv.pdf',
            content: 'Français',
        },
        {
            src: 'english_cv.pdf',
            content: 'English',
        },
    ];
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
                {#each cv as { src, content }}
                    <DropdownOption {title} {src} {content} />
                {/each}
            </div>
        </div>
    </div>
</Page>
