<script>
    import Page from '../components/Page.svelte';

    let srcGithub = 'github.svg';
    let github = 'github';

    let srcLinkedin = 'linkedin.svg';
    let linkedin = 'linkedin';
</script>

<svelte:head>
    <title>Etienne Dayre | Contact</title>
</svelte:head>

<Page>
    <div class="lg:w-full text-center m-auto py-8">
        <h1 class="text-blue-600 font-mono text-2xl">Contact</h1>
    </div>

    <div class="flex flex-col">
        <div class="flex justify-center p-3">
            <a
                href="https://github.com/EtienneFR/"
                target="_blank"
                rel="noopener">

                <img
                    src={srcGithub}
                    alt={github}
                    class="object-scale-down h-12" />

            </a>
        </div>
        <div class="flex justify-center p-3">
            <a
                href="https://linkedin.com/in/etienne-dayre/"
                target="_blank"
                rel="noopener">

                <img
                    src={srcLinkedin}
                    alt={linkedin}
                    class="object-scale-down h-12" />

            </a>
        </div>

        <div class="text-center">Etienne Dayre 2020.</div>

    </div>
</Page>
