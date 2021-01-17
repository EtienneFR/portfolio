<script context="module">
    export function preload({ params, query }) {
        return this.fetch(`projects.json`)
            .then(r => r.json())
            .then(posts => {
                return { posts };
            });
    }
</script>

<script>
    import Page from '../../components/Page.svelte';
    import CardClickable from '../../components/CardClickable.svelte';

    export let posts;
</script>

<svelte:head>
    <title>Etienne Dayre | Projets</title>
</svelte:head>

<Page>
    <div class="container m-auto">

        <div class="py-8 m-auto text-center lg:w-full">
            <h1 class="text-2xl text-blue-600">Projets</h1>
        </div>

        <span class="block px-1 py-1 text-center">
            Les deux projets dans le cadre du BTS SIO.
        </span>

        <div class="flex flex-col items-center p-6">
            {#each posts as post}
                <CardClickable
                    id={post.id}
                    href="projects/{post.slug}"
                    src={post.src}
                    alt={post.alt}
                    title={post.title}
                    content={post.content} />
            {/each}
        </div>
    </div>
</Page>
