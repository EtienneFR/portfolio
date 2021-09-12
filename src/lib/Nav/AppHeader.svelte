<script>
    import NavLink from './NavLink.svelte';
    import Theme from '$lib/Theme.svelte';

    export let segment;

    const links = [
        {
            text: 'Home',
            link: '/',
        },
        {
            text: 'About',
            link: '/about',
        },
        {
            text: 'Skills',
            link: '/skills',
        },
        {
            text: 'Projects',
            link: '/projects',
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

<nav class="flex flex-wrap items-center justify-between px-3 py-3">
    <div class="flex items-center flex-shrink-0 mr-6" />
    <div class="block lg:hidden md:hidden">
        <button
            on:click={buttonClick}
            class="flex items-center"
            aria-label="Left Align">
            <span class="sr-only">Phone menu</span>
            <svg viewBox="0 0 20 20" fill="currentColor" class="w-10 h-10">
                <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1
                    0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1
                    1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd" />
            </svg>
        </button>
    </div>
    <div class="flex flex-col justify-between w-full md:flex-row">
        <div on:click={linkClick}>
            <ul class={classes}>
                {#each links as { text, link }, index}
                    <NavLink
                        {link}
                        isCurrentPage={segment === link}>
                        {text}
                    </NavLink>
                {/each}
            </ul>
        </div>
        <div on:click={linkClick}>
            <ul class={classes}>
                <NavLink link="/contact" isCurrentPage={segment === '/contact'}>
                    Contact
                </NavLink>
            </ul>
        </div>
    </div>
    <div class="flex flex-row-reverse w-full pt-3">
        <div class="px-4 py-3">
            <Theme />
        </div>
    </div>
</nav>
