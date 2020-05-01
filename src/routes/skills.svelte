<script>
    let srcSvgHtml = 'html.svg';
    let nameSvgHtml = 'html';

    let srcSvgCss = 'css.svg';
    let nameSvgCss = 'css';

    let srcSvgPhp = 'php.svg';
    let nameSvgPhp = 'php';

    let srcSvgJava = 'java.svg';
    let nameSvgJava = 'java';

    let srcSvgAzure = 'azure.svg';
    let nameSvgAzure = 'azure';

    let srcSvgMySql = 'mysql.svg';
    let nameSvgMySql = 'mysql';

    let srcSvgGit = 'git.svg';
    let nameSvgGit = 'git';

    let srcSvgLinux = 'linux.svg';
    let nameSvgLinux = 'linux';

    let srcSvgPs = 'photoshop.svg';
    let nameSvgPs = 'photoshop';

    let srcSvgOffice = 'office.svg';
    let nameSvgOffice = 'office';
</script>

<svelte:head>
    <title>Etienne Dayre | Compétences</title>
</svelte:head>

<div class="w-full bg-gray-100 py-4 px-8">
    <div class="lg:w-full text-center m-auto py-8">
        <h1 class="text-blue-600 font-mono text-2xl">Mes compétences</h1>
    </div>
    <div class="px-8 py-4">
        <div class="flex">
            <img
                src={srcSvgHtml}
                alt={nameSvgHtml}
                class="object-scale-down h-16 p-2" />
            <img
                src={srcSvgCss}
                alt={nameSvgCss}
                class="object-scale-down h-16 p-2" />
            <span class="flex text-gray-600 font-mono items-center">
                HTML & CSS
            </span>
        </div>
        <div class="bg-teal-200 text-center rounded-full shadow-lg h-2">
            <div
                class="bg-teal-400 w-3/4 text-left rounded-full font-mono h-2" />

        </div>
    </div>

    <div class="px-8 py-4">
        <div class="flex">
            <img
                src={srcSvgPhp}
                alt={nameSvgPhp}
                class="object-scale-down h-16 p-2" />
            <span class="flex text-gray-600 font-mono items-center">PHP</span>
        </div>
        <div class="bg-teal-200 text-center rounded-full shadow-lg h-2">
            <div
                class="bg-teal-400 w-2/4 text-left rounded-full font-mono h-2" />

        </div>
    </div>

    <div class="px-8 py-4">
        <div class="flex">
            <img
                src={srcSvgJava}
                alt={nameSvgJava}
                class="object-scale-down h-16 p-2" />
            <span class="flex text-gray-600 font-mono items-center">JAVA</span>
        </div>
        <div class="bg-teal-200 text-center rounded-full shadow-lg h-2">
            <div
                class="bg-teal-400 w-2/4 text-left rounded-full font-mono h-2" />

        </div>
    </div>

    <div class="px-8 py-4">
        <div class="flex">
            <img
                src={srcSvgMySql}
                alt={nameSvgMySql}
                class="object-scale-down h-16 p-2" />
            <span class="flex text-gray-600 font-mono items-center">MYSQL</span>
        </div>
        <div class="bg-teal-200 text-center rounded-full shadow-lg h-2">
            <div
                class="bg-teal-400 w-3/4 text-left rounded-full font-mono h-2" />

        </div>
    </div>

    <div class="px-8 py-4">
        <div class="flex">
            <img
                src={srcSvgGit}
                alt={nameSvgGit}
                class="object-scale-down h-16 p-2" />
            <span class="flex text-gray-600 font-mono items-center">GIT</span>
        </div>
        <div class="bg-teal-200 text-center rounded-full shadow-lg h-2">
            <div
                class="bg-teal-400 w-5/6 text-left rounded-full font-mono h-2" />

        </div>
    </div>

    <div class="px-8 py-4">
        <div class="flex">
            <img
                src={srcSvgLinux}
                alt={nameSvgLinux}
                class="object-scale-down h-16 p-2" />
            <span class="flex text-gray-600 font-mono items-center">LINUX</span>
        </div>
        <div class="bg-teal-200 text-center rounded-full shadow-lg h-2">
            <div
                class="bg-teal-400 w-2/5 text-left rounded-full font-mono h-2" />

        </div>
    </div>

    <div class="px-8 py-4">
        <div class="flex">
            <img
                src={srcSvgPs}
                alt={nameSvgPs}
                class="object-scale-down h-16 p-2" />
            <span class="flex text-gray-600 font-mono items-center">
                PHOTOSHOP
            </span>
        </div>
        <div class="bg-teal-200 text-center rounded-full shadow-lg h-2">
            <div
                class="bg-teal-400 w-3/4 text-left rounded-full font-mono h-2" />

        </div>
    </div>

    <div class="px-8 py-4">
        <div class="flex">
            <img
                src={srcSvgOffice}
                alt={nameSvgOffice}
                class="object-scale-down h-16 p-2" />
            <span class="flex text-gray-600 font-mono items-center">
                OFFICE
            </span>
        </div>
        <div class="bg-teal-200 text-center rounded-full shadow-lg h-2">
            <div
                class="bg-teal-400 w-3/4 text-left rounded-full font-mono h-2" />

        </div>
    </div>
</div>
