import { basename } from 'path';
import type { Post } from '$lib/types';
import type { PageServerLoad } from './$types';

interface GetResult {
	posts: Post[];
}

function getAllPosts(): Post[] {
	const svx = import.meta.glob('./*.svx', { eager: true });

	const files: Post[] = Object.entries(svx).map(([path, { metadata }]) => {
		const { title, description, datetime } = metadata as Omit<Post, 'slug'>;

		return {
			title,
			description,
			datetime,
			slug: basename(path, '.svx')
		};
	});

	return files;
}

export const load: PageServerLoad<GetResult> = () => {
	const posts = getAllPosts();
	return {
		posts: posts
	};
};
