<script>
    //Activate or not the dark mode
    //Set theme in localStorage
    function toggleDarkMode() {
        if (localStorage.theme === 'dark') {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
        } else if (localStorage.theme === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
        }
    }
</script>

<label for="toogle" class="flex items-center cursor-pointer">
    <div class="relative">
        <input
            id="toogle"
            type="checkbox"
            class="hidden"
            on:change={toggleDarkMode} />
        
        <span class="dark:hidden" tabindex="0">
            <span class="sr-only">Light Mode</span>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-7 text-blue-700 hover:text-blue-400"
            viewBox="0 0 24 24"
            stroke="currentColor"
            >
                <path
                    class="fill-gray-200"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
            </svg>
        </span>

        <span class="hidden dark:inline">
            <span class="sr-only">Dark Mode</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-7 w-7 text-blue-300 hover:text-blue-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    class="fill-gray-800"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
            </svg>
        </span>
    </div>
</label>
