<script>
    import Page from '$lib/Page.svelte';
</script>

<svelte:head>
    <title>Error</title>
</svelte:head>

<Page class="px-8 py-4">
    <div class="py-8 m-auto text-center lg:w-full">
        <h1 class="text-2xl text-blue-600">An error occured</h1>
    </div>
    <div class="text-center">
        <a
            href="/"
            class="px-4 py-2 font-semibold text-blue-600 bg-gray-100 border border-blue-500 rounded dark:bg-gray-900 dark:text-white dark:hover:bg-blue-500 hover:bg-gray-200">
            Back to homepage
        </a>
    </div>
</Page>
