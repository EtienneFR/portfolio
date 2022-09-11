import { basename } from 'path';
import type { Project } from '$lib/types';
import type { PageServerLoad } from './$types';

interface GetResult {
	projects: Project[];
}

function getAllProjects(): Project[] {
	const svx = import.meta.glob('./*.svx', { eager: true });

	const files: Project[] = Object.entries(svx).map(([path, { metadata }]) => {
		// The Omit type is used to remove the `slug` property from the metadata object.
		const { id, src, alt, title, resume } = metadata as Omit<Project, 'slug'>;

		return {
			id,
			src,
			alt,
			title,
			resume,
			slug: basename(path, '.svx')
		};
	});

	return files;
}

export const load: PageServerLoad<GetResult> = () => {
	const projects = getAllProjects();
	return {
		projects
	};
};
