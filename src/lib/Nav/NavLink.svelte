<script>
    export let link;
    export let isCurrentPage;

    let classes;

    $: classes = `${
        isCurrentPage
            ? 'border-blue-600'
            : 'flex flex-row hover:border-blue-400 border-transparent'
    } inline-block border-b-2 px-2 py-1 transition-colors
        duration-100`;
</script>

<li
    class="lg:mr-3 md:mr-3 font-sans">
    <a sveltekit:prefetch href={link} class={classes}>
        <slot />
    </a>
</li>
