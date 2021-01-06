<script>
    import { onMount } from 'svelte';

    let className = '';
    export { className as class };

    export let data = [];

    const INTERVAL = 50;
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
            transform: translateY(-15px);
        }
        to {
            opacity: 1;
        }
    }
    .fadeIn {
        opacity: 0;
        animation-name: fadeIn;
        animation-duration: 600ms;
        animation-fill-mode: forwards;
    }
</style>

<div class={className}>
    {#each data as { id, href, src, alt, title, description }}
        <div
            {id}
            class="block w-4/5 m-8 overflow-hidden transition duration-100 ease-in-out transform bg-gray-100 rounded shadow-lg sm:max-w-sm hover:bg-gray-200 hover:-translate-y-1 hover:scale-110 dark:bg-gray-800"
            style="animation-delay: {INTERVAL * id}ms"
            on:animationend={animationEnd}>
            <a {href}>
                <img class="object-scale-down w-full h-32" {src} {alt} />
            </a>
            <div class="px-3 py-2">
                <div class="mb-2 text-xl font-bold text-blue-600">{title}</div>
                <p class="text-base text-gray-700 dark:text-white">
                    {description}
                </p>
            </div>
        </div>
    {/each}
</div>
