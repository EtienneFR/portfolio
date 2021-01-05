<script>
    import Page from '../components/Page.svelte';
    import SkillGraph from '../components/SkillGraph.svelte';

    const skills = [
        {
            src: 'html.svg',
            alt: 'html',
            title: 'HTML',
            level: 'w-3/4',
        },
        {
            src: 'css.svg',
            alt: 'css',
            title: 'CSS',
            level: 'w-3/4',
        },
        {
            src: 'php.svg',
            alt: 'php',
            title: 'PHP',
            level: 'w-2/4',
        },
        {
            src: 'java.svg',
            alt: 'java',
            title: 'JAVA',
            level: 'w-2/4',
        },
        {
            src: 'mysql.svg',
            alt: 'mysql',
            title: 'MYSQL',
            level: 'w-3/4',
        },
        {
            src: 'git.svg',
            alt: 'git',
            title: 'GIT',
            level: 'w-5/6',
        },
        {
            src: 'linux.svg',
            alt: 'linux',
            title: 'LINUX',
            level: 'w-2/5',
        },
        {
            src: 'photoshop.svg',
            alt: 'photoshop',
            title: 'PHOTOSHOP',
            level: 'w-3/4',
        },
        {
            src: 'office.svg',
            alt: 'office',
            title: 'OFFICE',
            level: 'w-3/4',
        },
    ];
</script>

<svelte:head>
    <title>Etienne Dayre | Compétences</title>
</svelte:head>

<Page class="px-8 py-4 ">
    <div class="py-8 m-auto text-center lg:w-full">
        <h1 class="text-2xl text-blue-600">Mes compétences</h1>
    </div>
    <SkillGraph class="select-none" {skills} />
</Page>
