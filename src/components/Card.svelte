<script>
    import { onMount } from 'svelte';

    let className = '';
    export { className as class };

    export let ppe = [];

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
    {#each ppe as { id, src, alt, title, content }}
        <div
            {id}
            class="block w-4/5 sm:max-w-sm rounded overflow-hidden shadow-lg
            transition duration-100 ease-in-out bg-gray-100 hover:bg-gray-200
            transform hover:-translate-y-1 hover:scale-110 m-8 {loaded ? 'fadeIn' : 'opacity-0'}"
            style="animation-delay: {INTERVAL * id}ms"
            on:animationend={animationEnd}>
            <img class="w-full" {src} {alt} />
            <div class="px-3 py-2">
                <div class="font-bold text-xl mb-2 text-blue-600">{title}</div>
                <p class="text-gray-700 text-justify pr-3">{content}</p>

            </div>
        </div>
    {/each}
    <slot />
</div>
