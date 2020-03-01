<script>
    import NavLink from './NavLink.svelte';

    export let segment;

    const links = [
        {
            text: 'Accueil',
            link: '.',
            segment: undefined,
        },
        {
            text: 'À propos',
            link: 'about',
            segment: 'about',
        },
        {
            text: 'Compétences',
            link: 'skills',
            segment: 'skills',
        },
        {
            text: 'Épreuve E4',
            link: 'e4',
            segment: 'e4',
        },
        {
            text: 'Épreuve E6',
            link: 'e6',
            segment: 'e6',
        },
        {
            text: 'Veilles',
            link: 'veilles',
            segment: 'veilles',
        },
    ];
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
            Contact
        </NavLink>
    </ul>
</nav>
