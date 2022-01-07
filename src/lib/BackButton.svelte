<script>
    export let href;
    export let name;
</script>

<div
    class="hidden px-2 py-1 m-2 transition-colors duration-100 border-b-2 border-transparent border-blue-800 dark:border-blue-300 md:inline-block hover:border-blue-400 dark:hover:border-blue-100">
    <a sveltekit:prefetch {href}>
        <div class="flex items-center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="object-scale-down mr-1 h-7 w-9">
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            {name}
        </div>
    </a>
</div>