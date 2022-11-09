interface FetcherError extends Error {
	response?: any;
	status?: number;
}

const fetcher = async (endpoint: string, options: Record<any, any>) => {
	const res = await fetch(endpoint, {
		...options,
		headers: { ...options.headers, 'content-type': 'application/json' }
	});

	if (!res.ok) {
		const error: FetcherError = new Error('An error occurred while fetching the data.');
		// Attach extra info to the error object.
		error.response = await res.json();
		error.status = res.status;
		throw error;
	}
	return res.json();
};

export default fetcher;
