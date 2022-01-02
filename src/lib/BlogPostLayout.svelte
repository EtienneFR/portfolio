<script>
    import Animate from '$lib/Animate.svelte';
    import Page from '$lib/Page.svelte';
    import { formatterDate } from '$lib/formatterDate';

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
        <div slot="animation-content">
            <div class="max-w-prose mx-auto md:w-2/3 px-3">
                <h2 class="flex justify-center pt-5 text-2xl text-blue-900 dark:text-blue-300 font-semibold">
                    {title}
                </h2>
                <blockquote class="mt-3 pl-4 md:w-2/3 text-gray-800 dark:text-blue-100 italic text-base bg-indigo-100 dark:bg-indigo-900 border-l-4 border-purple-800 dark:border-purple-200">
                    <span>Published:</span>
                    <time date={formattedDate}>
                        {formattedDate}
                    </time>
                </blockquote>
                <p class="text-gray-800 dark:text-blue-100 mt-4 font-semibold ">
                    {description}
                </p>
                <!-- wip: slot with the body of the article-->
                <!-- <slot />-->
            </div>
        </div>
    </Animate>
</Page>