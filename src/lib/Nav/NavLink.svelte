<script>
    export let link;
    export let isCurrentPage;

    let classes;

    $: classes = `${
        isCurrentPage
            ? 'border-blue-900 dark:border-blue-300'
            : 'flex flex-row hover:border-blue-400 dark:hover:border-blue-100 border-transparent'
    } inline-block border-b-2 md:px-2 py-1 transition-colors
        duration-100`;
</script>

<li
    class="lg:mr-3 md:mr-3 font-sans">
    <a sveltekit:prefetch href={link} class={classes}>
        <slot />
    </a>
</li>
