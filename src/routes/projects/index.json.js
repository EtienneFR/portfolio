import fs from 'fs';
import path from 'path';
import grayMatter from 'gray-matter';

const getAllPosts = () => {
	try {
		return fs.readdirSync('content/projects').map((fileName) => {
			const slug = fileName.replace(/\.md$/, '');
			const post = fs.readFileSync(path.resolve('content/projects', fileName), 'utf-8');
			return { slug, ...grayMatter(post).data };
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
