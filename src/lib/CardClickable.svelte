<script>
    import Card from '$lib/Card.svelte';

    let className;
    export { className as class };

    export let id;
    export let href;
    export let src;
    export let alt;
    export let title;
    export let content;
</script>

<Card bind:id bind:title bind:content>
    <div slot="clickable">
        <a sveltekit:prefetch {href}>
            <img class={className} {src} {alt} />
        </a>
    </div>
</Card>
