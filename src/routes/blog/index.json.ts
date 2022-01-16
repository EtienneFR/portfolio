import { basename } from 'path';
import type { Post } from '$lib/types';
import type { RequestHandler } from '@sveltejs/kit';

interface GetResult {
	posts: Post[];
}

function getAllPosts(): Post[] {
	const svx = import.meta.globEager('./*.svx');

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

export const get: RequestHandler<unknown, GetResult> = async () => {
	const posts = getAllPosts();
	return {
		body: posts
	};
};
