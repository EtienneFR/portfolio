import { basename } from 'path';

const getAllProjects = () => {
	const svx = import.meta.globEager('./*.svx');

	const files = Object.entries(svx).map(([path, { metadata }]) => {
		const { id, src, alt, title, resume } = metadata;

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
};

export async function get() {
	const projects = getAllProjects();
	return {
		body: projects
	};
}
