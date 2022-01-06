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
        <article slot="animation-content">
            <div class="max-w-prose mx-auto md:w-2/3 px-3">
                <h2 class="flex justify-center pt-5 text-2xl text-blue-900 dark:text-blue-300 font-semibold">
                    {title}
                </h2>

                <p class="text-gray-800 dark:text-blue-100 mt-4 font-semibold ">
                    {description}
                </p>

                <div class="mt-5 pb-10 mx-auto prose prose-indigo dark:prose-indigo-900 prose-indigo-100 prose-h4:italic dark:prose-h3:text-blue-100 dark:prose-h4:text-blue-100 prose-lg text-gray-800 dark:text-blue-100">
                    <slot/>
                </div>
            </div>
        </article>
    </Animate>
</Page>
