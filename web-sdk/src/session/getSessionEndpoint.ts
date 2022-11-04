import config from '../config';
import { getInstance } from '../utils/instance';

const getSessionEndpoint = () => {
	const instance = getInstance();
	if (!instance || !instance.projectId || !instance.sessionId) return null;

	return `${config.BACKEND_URL}/session/${instance.projectId}/${instance.sessionId}`;
};

export default getSessionEndpoint;
