import type { Project } from '$lib/types';
import type { PageServerLoad } from './$types';
import { getAllProjects } from './fetchProjects';

interface GetResult {
	projects: Project[];
}

export const load: PageServerLoad<GetResult> = () => {
	const projects = getAllProjects();
	return {
		projects
	};
};
