import { basename } from 'path';

const getAllPosts = () => {
	const svx = import.meta.globEager('./*.svx');

	const files = Object.entries(svx).map(([path, { metadata }]) => {
		const { title, description, datetime } = metadata;

		return {
			title,
			description,
			datetime,
			slug: basename(path, '.svx')
		};
	});

	return files;
};

export async function get() {
	const posts = getAllPosts();
	return {
		body: posts
	};
}
