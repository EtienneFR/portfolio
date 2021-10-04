<script context="module">
    export async function load({ page, fetch }) {
        const res = await fetch(`/projects/${page.params.slug}.json`);

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
    export let post;
</script>

<svelte:head>
    <title>Etienne Dayre | {post.title}</title>
</svelte:head>

<Page>
    <div class="container m-auto">
        <div
            class="hidden px-2 py-1 m-2 transition-colors duration-100 border-b-2 border-transparent border-blue-800 dark:border-blue-300 md:inline-block hover:border-blue-400 dark:hover:border-blue-100">
            <a sveltekit:prefetch href="/projects">
                <div class="flex items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="object-scale-down mr-1 h-7 w-9">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                    </svg>
                    Projets
                </div>
            </a>
        </div>
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
