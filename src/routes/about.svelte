<script>
    import Page from '$lib/Page.svelte';
    import Dropdown from '$lib/Dropdown.svelte';

    const description = {
        text: `
            I'm a web developer based in Paris.
            I really appreciate web, sciences, innovation and technologies in general.
            I was integrated into the professional context and I was able to grasp the challenges of an IT project
            during block apprenticeship in a banking company.
            `
    }
</script>

<svelte:head>
    <title>Etienne Dayre | About</title>
</svelte:head>
<Page>
    <div class="container m-auto">
        <div class="flex flex-wrap mt-8 lg:space-x-10">
            <div class="w-full text-center lg:flex-1 lg:text-left">
                <h1 class="text-2xl text-blue-600">Etienne Dayre</h1>
                <h2 class="text-xl">Full Stack Web Developer</h2>
            </div>
            <div
                class="px-2 m-2 mt-10 text-center lg:flex-1 sm:w-full lg:text-right">
                {description.text}
            </div>
        </div>
        <div class="w-full mt-2 text-center lg:text-left">
            <Dropdown class="relative inline-block text-left shadow-lg" />
        </div>
    </div>
</Page>
