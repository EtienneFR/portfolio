<script>
    import Card from '../components/Card.svelte';

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
        <a sapper:prefetch {href}>
            <img class={className} {src} {alt} />
        </a>
    </div>
</Card>
