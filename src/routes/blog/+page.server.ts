import type { Post } from '$lib/types';
import type { PageServerLoad } from './$types';
import { getAllPosts } from './fetchPosts';
interface GetResult {
	posts: Post[];
}

export const load: PageServerLoad<GetResult> = () => {
	const posts = getAllPosts();
	return {
		posts: posts
	};
};
