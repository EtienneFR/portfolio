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
            text: 'Skills',
            link: '/skills',
        },
        {
            text: 'Projects',
            link: '/projects',
        },
        {
            text: 'Blog',
            link: '/blog',
        },
        {
            text: 'Contact',
            link: '/contact',
        },
    ];
    let isOpen;
    let classes;

    function buttonClick() {
        isOpen = !isOpen;
    }

    $: classes = `${
        isOpen ? 'flex' : 'hidden'
    } md:flex items-start flex-col md:flex-row md:justify-between`;

    function linkClick() {
        isOpen = false;
    }
</script>

<nav class="flex flex-wrap items-center justify-between px-4 py-3 mb-3">
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
        <div class="w-min" on:click={linkClick}>
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
        <div class="md:hidden mt-3 pt-1 w-min border-t border-gray-400 dark:border-gray-200/10 {classes}">
            <Theme />
        </div>
        <div class="hidden md:flex md:flex-row-reverse">
            <Theme />
        </div>
    </div>
</nav>
