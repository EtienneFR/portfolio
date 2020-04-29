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

<link href="https://css.gg/menu.css" rel="stylesheet" />
<nav
    class="flex items-center justify-between flex-wrap border-b border-gray-800
    py-3 px-3">
    <div class="flex items-center flex-shrink-0 text-white mr-6" />
    <div class="block lg:hidden">
        <button
            on:click={buttonClick}
            class="flex items-center px-3 py-3 border rounded text-gray-600
            border-gray-600 hover:border-gray-800">
            <i class="gg-menu" />

        </button>
    </div>
    <div class="w-full block flex-grow">

        <div
            class="flex items-center flex-col md:flex-row"
            on:click={linkClick}>
            <ul class={classes}>
                {#each links as { text, link, segment: linkSegment, alignEnd }, index}
                    <NavLink
                        addEndMargin={index !== links.length - 1}
                        {link}
                        isCurrentPage={segment === linkSegment}>
                        {text}
                    </NavLink>
                {/each}
            </ul>
        </div>
        <!--<ul class={classes}>
            <NavLink link="contact" isCurrentPage={segment === 'contact'}>
                Contact
            </NavLink>
        </ul>-->

    </div>
</nav>
