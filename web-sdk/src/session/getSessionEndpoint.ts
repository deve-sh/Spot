import config from '../config';
import { getInstance } from '../utils/instance';

const getSessionEndpoint = () => {
	const instance = getInstance();
	if (!instance || !instance.projectId || !instance.sessionId) return null;

	return `${config.BACKEND_URL}/log/${instance.projectId}/session/${instance.sessionId}`;
};

export default getSessionEndpoint;
