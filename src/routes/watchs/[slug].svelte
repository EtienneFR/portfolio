<script context="module">
    export async function preload({ params, query }) {
        // the `slug` parameter is available because
        // this file is called [slug].svelte
        const res = await this.fetch(`watchs/${params.slug}.json`);
        if (res.status === 200) {
            const data = await res.json();
            return { post: data };
        } else {
            this.redirect(301, '404');
        }
    }
</script>

<script>
    import Page from '../../components/Page.svelte';
    import CardClickable from '../../components/CardClickable.svelte';
    export let post;
</script>

<svelte:head>
    <title>Etienne Dayre | {post.title}</title>
</svelte:head>

<Page>
    <div class="container m-auto">

        <div
            class="hidden px-2 py-1 m-2 transition-colors duration-100 border-b-2 border-transparent border-blue-600 md:inline-block hover:border-blue-400">
            <a sapper:prefetch href="watchs">Retour aux veilles</a>
        </div>
        <div class="py-8 m-auto text-center lg:w-full">
            <h1 class="text-2xl text-blue-600">Veilles</h1>
        </div>

        <span class="block px-1 py-1 text-center">{post.title}</span>

        <div class="flex flex-col items-center p-6">

            <CardClickable
                class="object-scale-down w-full h-32"
                id={post.id}
                href={post.href}
                src={post.src}
                alt={post.alt}
                title={post.title}
                content={post.html} />

        </div>
    </div>
</Page>
