import { getInstance } from './instance';

const responseHandler = (resp: Response) => {
	if (resp.status === 401) {
		const instance = getInstance();
		if (!instance) return;
		instance.canSendAPICalls = false; // No further API Calls
	}
};

export default responseHandler;
