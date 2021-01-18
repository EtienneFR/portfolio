<script context="module">
    export function preload({ params, query }) {
        return this.fetch(`watchs.json`)
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
    <title>Etienne Dayre | Veilles</title>
</svelte:head>

<Page>
    <div class="container m-auto">

        <div class="py-8 m-auto text-center lg:w-full">
            <h1 class="text-2xl text-blue-600">Mes veilles</h1>
        </div>

        <span class="block px-1 py-1 text-center">
            Veille technologique sur les voitures connectées et veille juridique
            sur les contrats et fournitures de services informatiques
        </span>

        <div class="flex flex-col items-center p-6">
            {#each posts as post}
                <CardClickable
                    id={post.id}
                    href="watchs/{post.slug}"
                    src={post.src}
                    alt={post.alt}
                    title={post.title}
                    content={post.recap} />
            {/each}
        </div>
    </div>
</Page>
