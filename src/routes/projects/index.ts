import { basename } from 'path';
import type { Project } from '$lib/types';
import type { RequestHandler } from '@sveltejs/kit';

interface GetResult {
	projects: Project[];
}

function getAllProjects(): Project[] {
	const svx = import.meta.globEager('./*.svx');

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

export const GET: RequestHandler<unknown, GetResult> = () => {
	const projects = getAllProjects();
	return {
		body: {
			projects: projects
		}
	};
};
