<script>
    import { onMount } from 'svelte';

    onMount(() => {
        if (window.netlifyIdentity) {
            window.netlifyIdentity.on('init', user => {
                if (!user) {
                    window.netlifyIdentity.on('login', () => {
                        document.location.href = '/admin/';
                    });
                }
            });
        }
    });

    import Page from '$lib/Page.svelte';
    import CardClickable from '$lib/Card/CardClickable.svelte';

    const projects = [
        {
            id: 1,
            href: 'projects',
            src: 'projects/ppe1.png',
            alt: 'ppe1',
            title: 'Study project : Website',
            content: `
                Loan request application and monitoring website for
                startups.
            `,
        },
        {
            id: 2,
            href: 'projects#ppe2',
            src: 'projects/ppe2.png',
            alt: 'ppe2',
            title: 'Study project : Application',
            content: `
                Loan application management software for
                startups.
            `,
        },
    ];

    const description = {
        text: `
            You find on this website all my achievements, studies projects 
            and personal discovery about framework, libraries and others.
        `
    }
</script>

<svelte:head>
    <title>Etienne Dayre</title>
    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js">

    </script>
</svelte:head>

<Page>
    <div class="container m-auto">
        <div class="py-8 m-auto text-center lg:w-full">
            <h1 class="text-2xl text-blue-600">Etienne Dayre</h1>
            <h2 class="text-xl">Full Stack Web Developer</h2>
        </div>

        <div class="p-4">
            <span class="block px-1 py-1 text-center">
                {description.text}
            </span>
        </div>

        <div class="flex flex-wrap justify-around p-6">
            {#each projects as { id, href, src, alt, title, content }}
                <CardClickable
                    class="w-full h-48"
                    {id}
                    {href}
                    {src}
                    {alt}
                    {title}
                    {content} />
            {/each}
        </div>
    </div>
</Page>
