interface Project {
	id: string;
	project_name: string;
	projects_members?: { added_at: string; role: string }[];
	n_max_api_calls_per_month: number;
	created_by: string;
	project_platform: 'web';
	public_api_key: string;
	updated_at: string;
	created_at: string;
}

export default Project;
