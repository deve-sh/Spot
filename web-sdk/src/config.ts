const config = {
	BACKEND_URL:
		process.env.NODE_ENV !== 'development'
			? 'https://spot-api.vercel.app'
			: 'http://localhost:5432',
	MONITORING_DATA_ENDPOINT: 'web-monitoring',
	LOG_DATA_ENDPOINT: 'web-logs',
	MONITORING_INTERVAL: 4000,
	LOG_SENDING_DEBOUNCE_TIME: 1000
};

export default config;
