<script>
    import Animate from '../components/Animate.svelte';

    let className = '';
    export { className as class };

    export let id;
    export let src;
    export let alt;
    export let title;
    export let content;
</script>

<Animate>
    <div
        slot="animation-content"
        {id}
        class="{className} block w-4/5 sm:max-w-sm rounded overflow-hidden
        shadow-lg transition duration-100 ease-in-out bg-gray-100
        dark:bg-gray-800 hover:bg-gray-200 transform hover:-translate-y-1
        hover:scale-110 m-8">

        <img class="w-full" {src} {alt} />
        <div class="px-3 py-2">
            <div class="mb-2 text-xl font-bold text-blue-600">{title}</div>
            <p class="pr-3 text-justify text-gray-700 dark:text-white">
                {content}
            </p>
        </div>
    </div>
</Animate>
