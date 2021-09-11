import path from 'path';
import fs from 'fs';
import grayMatter from 'gray-matter';
import marked from 'marked';

const getPost = (fileName) => {
	try {
		return fs.readFileSync(path.resolve('content/projects', `${fileName}.md`), 'utf-8');
	} catch (e) {
		return [];
	}
};

export function get({ params }) {
	try {
		const { slug } = params;

		const post = getPost(slug);
		const renderer = new marked.Renderer();

		const { data, content } = grayMatter(post);
		const html = marked(content, { renderer });

		if (html) {
			return {
				body: { html, ...data }
			};
		} else {
			return {
				body: { message: `Not found` }
			};
		}
	} catch (e) {
		return [];
	}
}
