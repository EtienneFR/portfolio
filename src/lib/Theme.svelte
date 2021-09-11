<script>
    import { onMount } from 'svelte';

    //Activate or not the dark mode
    //Set theme in localStorage
    function toggleDarkMode() {
        if (localStorage.theme === 'dark') {
            document.documentElement.classList.toggle('mode-dark');
            localStorage.setItem('theme', 'light');
        } else if (localStorage.theme === 'light') {
            document.documentElement.classList.toggle('mode-dark');
            localStorage.setItem('theme', 'dark');
        }
    }
</script>

<style>
    :global(.mode-dark) img[alt='light'] {
        -webkit-filter: invert(100%);
        filter: invert(100%);
    }
</style>

<label for="toogle" class="flex items-center cursor-pointer">
    <div class="relative">
        <input
            id="toogle"
            type="checkbox"
            class="hidden"
            on:change={toggleDarkMode} />
        <img src="/light.svg" alt="light" class="object-scale-down h-12" />
    </div>
</label>
