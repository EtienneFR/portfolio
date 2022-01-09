<script>
    import { handleOutsideClick } from '../clickOutside';
    import { ChevronDown } from '$lib/Icons';

    let title = 'CV';

    let isOpen;
    let classes;

    let className;
    export { className as class };

    const cv = [
        {
            src: '/english_cv.pdf',
            content: 'English',
        },
        {
            src: '/cv.pdf',
            content: 'French',
        },
    ];

    function buttonClick() {
        isOpen = !isOpen;
    }

    $: classes = `${
        isOpen ? 'flex-direction: column' : 'hidden'
    } absolute right-0 mt-3`;
</script>

<div
    class={className}
    use:handleOutsideClick={{ enabled: isOpen, cb: () => (isOpen = false) }}>

    <button
        on:click={buttonClick}
        type="button"
        class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium shadow-lg rounded-md bg-gray-200 dark:hover:bg-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-white"
        id="options-menu"
        aria-haspopup="true"
        aria-expanded="true">
        {title}
        <svelte:component this={ChevronDown} class="w-5 h-5 ml-2 -mr-1" />
    </button>
    <div class={classes}>
        {#each cv as { src, content }}
            <div
                class="mb-1 origin-top-right rounded-md shadow-sm bg-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 dark:bg-gray-800"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu">
                <a
                    href={src}
                    target="_blank"
                    class="block px-4 py-2 text-sm dark:text-white"
                    role="menuitem">
                    {content}
                </a>
            </div>
        {/each}
    </div>
</div>
