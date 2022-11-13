import config from '../config';
import { getInstance } from '../utils/instance';

const getLoggingEndpoint = () => {
	const instance = getInstance();
	if (!instance || !instance.projectId) return null;

	return `${config.BACKEND_URL}/log/${instance.projectId}/${config.LOG_TRACES_ENDPOINT}`;
};

export default getLoggingEndpoint;
