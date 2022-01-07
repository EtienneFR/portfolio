<script context="module">
    export async function load({ params, fetch }) {
        const res = await fetch(`/projects/${params.slug}.json`);

        if(!res.ok) {
            return {
                error: new Error('An error occured, please try again later.'),
                status: 500
            };
        }

        const post = await res.json();

        return {
            props: {
                post: post
            }
        };

    }
</script>

<script>
    import Page from '$lib/Page.svelte';
    import CardNotClickable from '$lib/Card/CardNotClickable.svelte';
    import BackButton from '$lib/BackButton.svelte';

    export let post;
</script>

<svelte:head>
    <title>Etienne Dayre | {post.title}</title>
</svelte:head>

<Page>
    <div class="container m-auto">
        <BackButton href="/projects" name="Projects"/>
        <div class="py-8 m-auto text-center lg:w-full">
            <h1 class="text-2xl text-blue-900 dark:text-blue-300">Projects</h1>
        </div>

        <span class="block px-1 py-1 text-center">{post.title}</span>

        <div class="flex flex-col items-center p-6">

            <CardNotClickable
                id={post.id}
                src={post.src}
                alt={post.alt}
                title={post.title}
                content={post.html} />

        </div>
    </div>
</Page>
