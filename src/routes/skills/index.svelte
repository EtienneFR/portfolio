<script>
    import { onMount } from 'svelte';
    import Page from '../../components/Page.svelte';
    import SkillGraph from '../../components/SkillGraph.svelte';

    let posts = [];

    onMount(async () => {
        const res = await fetch(`skills.json`);
        posts = await res.json();
    });
</script>

<svelte:head>
    <title>Etienne Dayre | Veilles</title>
</svelte:head>

<Page class="px-8 py-4 ">
    <div class="py-8 m-auto text-center lg:w-full">
        <h1 class="text-2xl text-blue-600">Mes compétences</h1>
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
