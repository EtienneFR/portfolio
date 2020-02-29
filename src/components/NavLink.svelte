<script>
    export let addEndMargin = false;
    export let link;
    export let isCurrentPage;
</script>

<li class:mr-3={addEndMargin}>
    <a
        rel="prefetch"
        href={link}
        class:border-blue-600={isCurrentPage}
        class:hover:border-blue-400={!isCurrentPage}
        class="inline-block border-b-2 border-transparent py-1 transition-colors
        duration-100">
        <slot />
    </a>
</li>
