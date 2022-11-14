const getFillForUsageAction = (action: string) => {
	if (action === 'retreive_project') return '#202c39';
	if (action === 'get_project_top_urls') return '#283845';
	if (action === 'get_project_traces') return '#b8b08d';
	if (action === 'get_top_session_domains') return '#f2d492';
	if (action === 'list_sessions') return '#f29559';
	if (action === 'get_project_vitals') return '#0c1618';
	if (action === 'get_session_network_calls') return '#d1ac00';
	if (action === 'get_session_info') return '#f6be9a';
	if (action === 'get_session_logs') return '#ff101f';
	if (action === 'get_session_vitals') return '#2176ae';
	return '#004643';
};

export default getFillForUsageAction;
