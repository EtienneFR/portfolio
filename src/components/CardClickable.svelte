<script>
    import Animate from '../components/Animate.svelte';

    export let id;
    export let href;
    export let src;
    export let alt;
    export let title;
    export let content;
</script>

<Animate>
    <div
        slot="animation-content"
        {id}
        class="block w-4/5 m-8 overflow-hidden transition duration-100 ease-in-out transform bg-gray-100 rounded shadow-lg sm:max-w-sm dark:bg-gray-800 hover:bg-gray-200 hover:-translate-y-1 hover:scale-110">
        <a {href}>
            <img class="object-scale-down w-full h-32" {src} {alt} />
        </a>
        <div class="px-3 py-2">
            <div class="mb-2 text-xl font-bold text-blue-600">{title}</div>
            <p class="text-base text-gray-700 dark:text-white">{content}</p>
        </div>
    </div>
</Animate>
