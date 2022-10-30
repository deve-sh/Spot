const config = {
	BACKEND_URL:
		process.env.NODE_ENV !== 'development'
			? 'https://spot-api.vercel.app'
			: 'http://localhost:5432',
	MONITORING_INTERVAL: 4000
};

export default config;
