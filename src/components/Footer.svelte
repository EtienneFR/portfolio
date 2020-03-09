<script>
    let srcSvgGitHub = 'github.svg';
    let nameSvgGitHub = 'github';

    let srcSvgTailwindcss = 'tailwindcss.svg';
    let nameSvgTailwindcss = 'tailwindcss';

    let srcSvgSvelte = 'svelte.svg';
    let nameSvgSvelte = 'svelte';
</script>

<nav class="w-full border-t border-gray-800 py-3 px-3">
    <div class="container">
        <p class="font-mono text-center text-xs px-4">
            Conçu avec Sapper et Tailwindcss. Simple. Efficace. Etienne Dayre
            2020
        </p>
        <div class="flex flex-wrap p-3 justify-center">
            <a
                href="https://github.com/EtienneFR/portfolio-sapper"
                target="_blank">

                <img
                    src={srcSvgGitHub}
                    alt={nameSvgGitHub}
                    class="object-scale-down h-10 p-2" />

            </a>
            <a href="https://tailwindcss.com/" target="_blank">

                <img
                    src={srcSvgTailwindcss}
                    alt={nameSvgTailwindcss}
                    class="object-scale-down h-10 p-2" />

            </a>
            <a href="https://svelte.dev/" target="_blank">

                <img
                    src={srcSvgSvelte}
                    alt={nameSvgSvelte}
                    class="object-scale-down h-10 p-2" />

            </a>
        </div>
    </div>
</nav>
