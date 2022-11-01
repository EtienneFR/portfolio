import { basename } from 'path';
import type { Project } from '$lib/types';

export function getAllProjects(): Project[] {
	const svx = import.meta.glob('./*.svx', { eager: true });

	const files: Project[] = Object.entries(svx).map(([path, data]) => {
		const { metadata } = data as { metadata: Omit<Project, 'slug'> };
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
