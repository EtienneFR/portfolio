import fs from 'fs';
import path from 'path';
import grayMatter from 'gray-matter';

const getAllPosts = () => {
	try {
		return fs.readdirSync('content/skills').map((fileName) => {
			const post = fs.readFileSync(path.resolve('content/skills', fileName), 'utf-8');
			return grayMatter(post).data;
		});
	} catch (e) {
		return [];
	}
};

export function get() {
	const posts = getAllPosts();
	return {
		body: posts
	};
}
