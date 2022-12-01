import { getInstance } from './instance';
import responseHandler from './responseHandler';

const send = (endpoint: string, data?: any) => {
	const instance = getInstance();
	if (!instance) return;

	const { apiKey, canSendAPICalls } = instance;
	if (!canSendAPICalls || !apiKey) return;

	return fetch(endpoint, {
		body: data ? JSON.stringify(data) : '',
		mode: 'cors',
		method: 'POST',
		headers: { 'content-type': 'application/json', authorization: `Key ${apiKey}` },
		keepalive: true
	})
		.then(responseHandler)
		.catch(() => null);
};

export default send;
