export interface Option {
	id: string;
	label: string;
	src: string;
}

export interface Post {
	title: string;
	description: string;
	datetime: string;
	slug: string;
}

export interface Project {
	id: string;
	src: string;
	alt: string;
	title: string;
	resume: string;
	slug: string;
}
