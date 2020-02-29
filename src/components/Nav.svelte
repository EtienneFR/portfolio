<script>
    import NavLink from './NavLink.svelte';

    export let segment;

    const links = [
        {
            text: 'home',
            link: '.',
            segment: undefined,
        },
        {
            text: 'about',
            link: 'about',
            segment: 'about',
        },
        {
            text: 'skills',
            link: 'skills',
            segment: 'skills',
        },
        {
            text: 'E4',
            link: 'e4',
            segment: 'e4',
        },
        {
            text: 'E6',
            link: 'e6',
            segment: 'e6',
        },
        {
            text: 'veilles',
            link: 'veilles',
            segment: 'veilles',
        },
    ];

    $: console.log('segment', segment);
</script>

<nav class="border-b border-gray-800 py-3 px-3">
    <ul class="flex items-center justify-between">
        <div class="flex items-center">
            {#each links as { text, link, segment: linkSegment, alignEnd }, index}
                <NavLink
                    addEndMargin={index !== links.length - 1}
                    {link}
                    isCurrentPage={segment === linkSegment}>
                    {text}
                </NavLink>
            {/each}
        </div>

        <NavLink link="contact" isCurrentPage={segment === 'contact'}>
            contact
        </NavLink>
    </ul>
</nav>
