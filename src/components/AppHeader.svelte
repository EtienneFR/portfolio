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
    let isOpen;
    let classes;

    function buttonClick() {
        isOpen = !isOpen;
    }

    $: classes = `${
        isOpen ? 'flex' : 'hidden'
    } md:flex items-center flex-col md:flex-row md:justify-between`;

    function linkClick() {
        isOpen = false;
    }
</script>

<nav
    class="flex items-center justify-between flex-wrap border-b border-gray-800
    py-3 px-3">
    <div class="flex items-center flex-shrink-0 text-white mr-6" />
    <div class="block lg:hidden">
        <button
            on:click={buttonClick}
            class="flex items-center px-3 py-2 border rounded text-gray-300
            border-gray-300 hover:border-gray-400">
            <svg
                class="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
        </button>
    </div>
    <div class="w-full block flex-grow">
        <ul class={classes}>
            <div
                class="flex items-center flex-col md:flex-row"
                on:click={linkClick}>
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
    </div>
</nav>
