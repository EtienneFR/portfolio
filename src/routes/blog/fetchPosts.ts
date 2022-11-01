import { basename } from 'path';
import type { Post } from '$lib/types';

export function getAllPosts(): Post[] {
	const svx = import.meta.glob('./*.svx', { eager: true });

	const files: Post[] = Object.entries(svx).map(([path, data]) => {
		const { metadata } = data as { metadata: Omit<Post, 'slug'> };
		const { title, description, datetime } = metadata;

		return {
			title,
			description,
			datetime,
			slug: basename(path, '.svx')
		};
	});

	return files;
}
