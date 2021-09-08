<script context="module">
    export async function load({ fetch }) {
        const res = await fetch(`projects.json`)
        
        return { 
            props: { 
                posts: await res.json() 
            } 
        };
    }
</script>

<script>
    import Page from '$lib/Page.svelte';
    import CardClickable from '$lib/Card/CardClickable.svelte';

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
            L'ensemble de mes projets
        </span>

        <div class="flex flex-col items-center p-6">
            {#each posts as post}
                <CardClickable
                    class="text-base"
                    id={post.id}
                    href="projects/{post.slug}"
                    src={post.src}
                    alt={post.alt}
                    title={post.title}
                    content={post.recap} />
            {/each}
        </div>
    </div>
</Page>
