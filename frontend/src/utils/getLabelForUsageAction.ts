const getLabelForUsageAction = (action: string) => {
	if (action === 'retreive_project') return 'Get Project Details';
	if (action === 'get_project_top_urls') return 'Get Project Top URLs';
	if (action === 'get_project_traces') return 'Get Project Traces';
	if (action === 'get_top_session_domains') return 'Get Project Session Domains';
	if (action === 'list_sessions') return 'List Project Sessions';
	if (action === 'get_project_vitals') return 'Get Project Vitals';
	if (action === 'get_session_network_calls') return 'Get Session Network Calls';
	if (action === 'get_session_info') return 'Get Session Info';
	if (action === 'get_session_logs') return 'Get Session Logs';
	if (action === 'get_session_vitals') return 'Get Session Vitals';
	return 'Monitoring & Logging API';
};

export default getLabelForUsageAction;
