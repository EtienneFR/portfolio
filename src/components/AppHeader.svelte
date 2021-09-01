<script>
    import NavLink from './NavLink.svelte';
    import Theme from '../components/Theme.svelte';

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
            text: 'Projets',
            link: 'projects',
            segment: 'projects',
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
            <span class="sr-only">Menu pour téléphone</span>
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
        <div on:click={linkClick}>
            <ul class={classes}>
                <NavLink
                    link="https://etienne-dayre-blog.netlify.app/"
                    class="inline">
                    Blog
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1
                            1 0 11-2 0 1 1 0 012 0z" />
                    </svg>
                </NavLink>
                <NavLink link="contact" isCurrentPage={segment === 'contact'}>
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
