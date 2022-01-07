<script>
    import Animate from '$lib/Animate.svelte';
    import { formatterDate } from '$lib/formatterDate';

    export let posts;

    let formatterPosts;

    $: formatterPosts = posts.map((post) => ({
        ...post,
        datetime: formatterDate(post.datetime),
    }));
</script>

<Animate>
    <div slot="animation-content">
        <ul class="grid gap-y-14">
            {#each formatterPosts as { title, description, datetime, slug }}
                <li class="flex flex-col max-w-prose">
                    <a class="w-max" href={`/blog/${slug}`} sveltekit:prefetch>
                        <h2 class="text-2xl text-blue-900 dark:text-blue-300 font-semibold hover:underline">
                            {title}
                        </h2>
                    </a>

                    <time {datetime} class="text-gray-800 dark:text-blue-100 italic text-sm">
                        {datetime}
                    </time>

                    <p class="mt-4 text-gray-900 dark:text-white">
                        {description}
                    </p>
                </li>
            {/each}
        </ul>
    </div>
</Animate>
