<script>
    import Page from '../components/Page.svelte';
    import Dropdown from '../components/Dropdown.svelte';
</script>

<svelte:head>
    <title>Etienne Dayre | À propos</title>
</svelte:head>
<Page>
    <div class="container m-auto">
        <div class="flex flex-wrap mt-8 lg:space-x-10">
            <div class="w-full text-center lg:flex-1 lg:text-left">
                <h1 class="text-2xl text-blue-600">Etienne Dayre</h1>
                <h2 class="text-xl">Développeur Web Full Stack</h2>
            </div>
            <div
                class="px-2 m-2 mt-10 text-center lg:flex-1 sm:w-full lg:text-right">
                Sur l'ensemble de mon portfolio, j'ai fait ressortir mes
                qualités et ma passion pour le monde du développement web et
                plus généralement de l'informatique. Au cours de mes expériences
                en alternance, je continue de me forger de nombreuses
                compétences.
            </div>
        </div>
        <div class="w-full mt-2 text-center lg:text-left">
            <Dropdown class="relative inline-block text-left shadow-lg" />
        </div>
    </div>
</Page>
