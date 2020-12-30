<script>
    import Page from '../components/Page.svelte';

    const skills = [
        {
            src: 'html.svg',
            alt: 'html',
            title: 'HTML',
            level: '3/4',
        },
        {
            src: 'css.svg',
            alt: 'css',
            title: 'CSS',
            level: '3/4',
        },
        {
            src: 'php.svg',
            alt: 'php',
            title: 'PHP',
            level: '2/4',
        },
        {
            src: 'java.svg',
            alt: 'java',
            title: 'JAVA',
            level: '2/4',
        },
        {
            src: 'mysql.svg',
            alt: 'mysql',
            title: 'MYSQL',
            level: '3/4',
        },
        {
            src: 'git.svg',
            alt: 'git',
            title: 'GIT',
            level: '5/6',
        },
        {
            src: 'linux.svg',
            alt: 'linux',
            title: 'LINUX',
            level: '2/5',
        },
        {
            src: 'photoshop.svg',
            alt: 'photoshop',
            title: 'PHOTOSHOP',
            level: '3/4',
        },
        {
            src: 'office.svg',
            alt: 'office',
            title: 'OFFICE',
            level: '3/4',
        },
    ];
</script>

<svelte:head>
    <title>Etienne Dayre | Compétences</title>
</svelte:head>

<Page class=" py-4 px-8">
    <div class="lg:w-full text-center m-auto py-8">
        <h1 class="text-blue-600 text-2xl">Mes compétences</h1>
    </div>
    <div class="select-none">
        {#each skills as { src, alt, title, level }}
            <div class="px-8 py-4">
                <div class="flex">
                    <img {src} {alt} class="object-scale-down h-16 p-2" />
                    <span class="flex text-gray-600 items-center">{title}</span>
                </div>
                <div class="bg-teal-200 text-center rounded-full shadow-lg h-2">
                    <div
                        class="bg-teal-400 w-{level} text-left rounded-full h-2" />
                </div>
            </div>
        {/each}
    </div>
</Page>
