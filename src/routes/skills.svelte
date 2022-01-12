<script>
	import Page from '$lib/Page.svelte';
	import SkillGraph from '$lib/SkillGraph.svelte';
	import { Azure, CSS, Git, HTML, Java, Linux, MYSQL, PHP, React, Svelte, Vue } from '$lib/Icons';
</script>

<svelte:head>
	<title>Etienne Dayre | Skills</title>
</svelte:head>

<Page class="px-8 py-4 ">
	<div class="py-8 text-center lg:w-full">
		<h1 class="text-2xl text-blue-900 dark:text-blue-300">My skills</h1>
	</div>
	<div class="select-none md:w-3/4 w-full flex flex-col ml-auto mr-auto">
		<SkillGraph title="AZURE" level="2">
			<Azure slot="icon" class="object-scale-down h-16 p-2" />
		</SkillGraph>

		<SkillGraph title="CSS" level="3">
			<CSS slot="icon" class="object-scale-down h-16 p-2" />
		</SkillGraph>

		<SkillGraph title="GIT" level="3">
			<Git slot="icon" class="object-scale-down h-16 p-2" />
		</SkillGraph>

		<SkillGraph title="HTML" level="3">
			<HTML slot="icon" class="object-scale-down h-16 p-2" />
		</SkillGraph>

		<SkillGraph title="JAVA" level="2">
			<Java slot="icon" class="object-scale-down h-16 p-2" />
		</SkillGraph>

		<SkillGraph title="LINUX" level="1">
			<Linux slot="icon" class="object-scale-down h-16 p-2" />
		</SkillGraph>

		<SkillGraph title="MYSQL" level="3">
			<MYSQL slot="icon" class="object-scale-down h-16 p-2" />
		</SkillGraph>

		<SkillGraph title="PHP" level="2">
			<PHP slot="icon" class="object-scale-down h-12 p-2" />
		</SkillGraph>

		<SkillGraph title="REACT" level="2">
			<React slot="icon" class="object-scale-down h-16 p-2" />
		</SkillGraph>

		<SkillGraph title="SVELTE" level="3">
			<Svelte slot="icon" class="object-scale-down h-16 p-2" />
		</SkillGraph>

		<SkillGraph title="VUE" level="1">
			<Vue slot="icon" class="object-scale-down h-14 p-2" />
		</SkillGraph>
	</div>
</Page>
