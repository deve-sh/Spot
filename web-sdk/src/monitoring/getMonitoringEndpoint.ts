import config from '../config';
import { getInstance } from '../utils/instance';

const getMonitoringEndpoint = () => {
	const instance = getInstance();
	if (!instance || !instance.projectId) return null;

	return `${config.BACKEND_URL}/log/${instance.projectId}/${config.MONITORING_DATA_ENDPOINT}`;
};

export default getMonitoringEndpoint;
