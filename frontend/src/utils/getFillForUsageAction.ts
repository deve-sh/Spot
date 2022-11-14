const getFillForUsageAction = (action: string) => {
	if (action === 'retreive_project') return '#202c39';
	if (action === 'get_project_top_urls') return '#283845';
	if (action === 'get_project_traces') return '#b8b08d';
	if (action === 'get_top_session_domains') return '#f2d492';
	if (action === 'list_sessions') return '#f29559';
	if (action === 'get_project_vitals') return '#0c1618';
	return '#004643';
};

export default getFillForUsageAction;
