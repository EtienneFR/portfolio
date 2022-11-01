import type { PageLoad } from './$types';
import type { ComponentType } from 'svelte';

type GetResult = {
	id: string;
	src: string;
	alt: string;
	title: string;
	resume: string;
	content: ComponentType;
};

export const load: PageLoad<GetResult> = async ({ params: { slug } }) => {
	const {
		metadata: { id, src, alt, title, resume },
		default: content
	}: {
		metadata: { id: string; src: string; alt: string; title: string; resume: string };
		default: ComponentType;
	} = await import(`../${slug}.svx`);

	return {
		id,
		src,
		alt,
		title,
		resume,
		content
	};
};
