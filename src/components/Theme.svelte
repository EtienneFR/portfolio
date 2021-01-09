<script>
    import { onMount } from 'svelte';

    //Activate or not the dark mode
    function toggleDarkMode() {
        document.documentElement.classList.toggle('mode-dark');
    }

    onMount(() => {
        const checkSystemeColor = () => {
            if (
                window.matchMedia &&
                window.matchMedia('(prefers-color-scheme: dark)').matches
            ) {
                toggleDarkMode();
            }
        };
        checkSystemeColor();
    });
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
        <img src="light.svg" alt="light" class="object-scale-down h-12" />
    </div>
</label>
