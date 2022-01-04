<script>
    import Animate from '$lib/Animate.svelte';
    import Page from '$lib/Page.svelte';
    import { formatterDate } from '$lib/formatterDate';
    import '../shiki.css';

    export let title;
    export let datetime;
    export let description;

    let formattedDate;

    $: formattedDate = formatterDate(datetime);
</script>

<svelte:head>
    <title>Etienne Dayre | {title}</title>
</svelte:head>

<Page>
    <Animate>
        <article slot="animation-content">
            <div class="max-w-prose mx-auto md:w-2/3 px-3">
                <h2 class="flex justify-center pt-5 text-2xl text-blue-900 dark:text-blue-300 font-semibold">
                    {title}
                </h2>
                <blockquote class="mt-3 pl-4 text-gray-800 dark:text-blue-100 text-base bg-indigo-100 dark:bg-indigo-900 border-l-4 border-purple-800 dark:border-purple-200">
                    <span>
                        Written by: 
                        <a rel="author" href="/contact" class="italic hover:underline md:mr-2">Etienne Dayre</a>
                    </span>
                    <span class=" hidden sm:inline">|</span>
                    <span class="block sm:inline md:ml-2">
                        Published:
                        <time date={formattedDate}>
                            {formattedDate}
                        </time>
                    </span>
                </blockquote>

                <p class="text-gray-800 dark:text-blue-100 mt-4 font-semibold ">
                    {description}
                </p>

                <div class="mt-5 pb-3 mx-auto prose prose-indigo dark:prose-indigo-900 prose-indigo-100 prose-h4:italic dark:prose-h3:text-blue-100 dark:prose-h4:text-blue-100 prose-lg text-gray-800 dark:text-blue-100">
                    <slot/>
                </div>
            </div>
        </article>
    </Animate>
</Page>
