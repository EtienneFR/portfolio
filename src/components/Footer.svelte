<script>
    let srcSvgGitHub = 'github.svg';
    let nameSvgGitHub = 'github';

    let srcSvgTailwindcss = 'tailwindcss.svg';
    let nameSvgTailwindcss = 'tailwindcss';

    let srcSvgSvelte = 'svelte.svg';
    let nameSvgSvelte = 'svelte';

    let srcSvgSapper = 'sapper.svg';
    let nameSvgSapper = 'sapper';
</script>

<footer class="border-t border-gray-800 py-2 px-2">

    <p class="font-mono text-center text-xs">Conçu avec</p>

    <div class="flex flex-wrap justify-center">
        <a
            href="https://github.com/EtienneFR/portfolio-sapper"
            target="_blank"
            rel="noopener">

            <img
                src={srcSvgGitHub}
                alt={nameSvgGitHub}
                class="object-scale-down h-10 p-2" />

        </a>
        <a href="https://tailwindcss.com/" target="_blank" rel="noopener">

            <img
                src={srcSvgTailwindcss}
                alt={nameSvgTailwindcss}
                class="object-scale-down h-10 p-2" />

        </a>
        <a href="https://svelte.dev/" target="_blank" rel="noopener">

            <img
                src={srcSvgSvelte}
                alt={nameSvgSvelte}
                class="object-scale-down h-10 p-2" />

        </a>

        <a href="https://sapper.svelte.dev/" target="_blank" rel="noopener">

            <img
                src={srcSvgSapper}
                alt={nameSvgSapper}
                class="object-scale-down h-10 p-2" />

        </a>
    </div>
    <p class="font-mono text-center text-xs px-4">Etienne Dayre 2020</p>

</footer>
