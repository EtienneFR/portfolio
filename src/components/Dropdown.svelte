<script>
    let title = 'CV';

    let isOpen;
    let classes;

    let className;
    export { className as class };

    const cv = [
        {
            src: 'cv.pdf',
            content: 'Français',
        },
        {
            src: 'english_cv.pdf',
            content: 'English',
        },
    ];

    function buttonClick() {
        isOpen = !isOpen;
    }

    $: classes = `${
        isOpen ? 'flex-direction: column' : 'hidden'
    } absolute right-0 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-gray-800`;
</script>

<div class={className}>
    <div>
        <button
            on:click={buttonClick}
            type="button"
            class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium bg-white border border-gray-300 rounded-md shadow-sm dark:border-gray-900 dark:bg-gray-800 dark:text-white"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true">
            {title}
            <svg
                class="w-5 h-5 ml-2 -mr-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true">
                <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0
                    111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd" />
            </svg>
        </button>
    </div>
    <div class={classes}>
        {#each cv as { src, content }}
            <div
                class="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu">
                <a
                    href={src}
                    class="block px-4 py-2 text-sm dark:text-white"
                    role="menuitem">
                    {content}
                </a>
            </div>
        {/each}
    </div>
</div>
