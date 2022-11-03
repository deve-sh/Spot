import config from '../config';
import { getInstance } from '../utils/instance';

const getSessionIdentifyEndpoint = () => {
	const instance = getInstance();
	if (!instance || !instance.projectId || !instance.sessionId) return null;

	return `${config.BACKEND_URL}/${instance.projectId}/session/${instance.sessionId}/identify`;
};

export default getSessionIdentifyEndpoint;
