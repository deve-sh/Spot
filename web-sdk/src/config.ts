const config = {
	BACKEND_URL: 'http://localhost:5100',
	MONITORING_DATA_ENDPOINT: 'web-monitoring',
	LOG_DATA_ENDPOINT: 'web-logs',
	LOG_TRACES_ENDPOINT: 'web-custom-traces',
	MONITORING_INTERVAL: 4000,
	LOG_SENDING_DEBOUNCE_TIME: 1000,
	TRACES_SENDING_DEBOUNCE_TIME: 2000
};

export default config;
