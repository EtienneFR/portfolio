<script context="module">
    export async function load({ fetch }) {
        const res = await fetch(`/skills.json`);

        if(!res.ok) {
            return {
                error: new Error('An error occured, please try again later.'),
                status: 500
            };
        }

        const posts = await res.json();

        return { 
            props: {
                posts: posts
            }
        };
    }
</script>

<script>
    import Page from '$lib/Page.svelte';
    import SkillGraph from '$lib/SkillGraph.svelte';

    export let posts;
</script>

<svelte:head>
    <title>Etienne Dayre | Skills</title>
</svelte:head>

<Page class="px-8 py-4 ">
    <div class="py-8 m-auto text-center lg:w-full">
        <h1 class="text-2xl text-blue-600">My skills</h1>
    </div>
    <div class="select-none">
        {#each posts as post}
            <SkillGraph
                src={post.src}
                alt={post.alt}
                title={post.title}
                level={post.level} />
        {/each}
    </div>
</Page>
