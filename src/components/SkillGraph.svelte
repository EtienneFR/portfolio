<script>
    import { onMount } from 'svelte';

    let className = '';
    export { className as class };

    export let skills = [];

    const INTERVAL = 75;
    let loaded = false;

    onMount(() => {
        loaded = true;
    });
    function animationEnd({ target: { classList } }) {
        classList.remove('fadeIn');
    }
</script>

<style>
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translate(-15px, -10px);
        }
        to {
            opacity: 1;
        }
    }
    .fadeIn {
        opacity: 0;
        animation-name: fadeIn;
        animation-duration: 500ms;
        animation-fill-mode: forwards;
    }
</style>

<div class={className}>
    {#each skills as { src, alt, title, level }, id}
        <div
            class="px-8 py-4 {loaded ? 'fadeIn' : 'opacity-0'}"
            style="animation-delay: {INTERVAL * id}ms"
            on:animationend={animationEnd}>
            <div class="flex">
                <img {src} {alt} class="object-scale-down h-16 p-2" />
                <span class="flex items-center text-gray-600">{title}</span>
            </div>
            <div class="h-2 text-center bg-teal-200 rounded-full shadow-lg">
                <div class="bg-teal-400 {level} text-left rounded-full h-2" />
            </div>
        </div>
        <slot />
    {/each}
</div>
