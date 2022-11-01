import type MonitoringEntry from '../types/MonitoringEntry';
import { getInstance } from '../utils/instance';
import responseHandler from '../utils/responseHandler';

import getMonitoringEndpoint from './getMonitoringEndpoint';

const sendMonitoringData = (entries: MonitoringEntry[]) => {
	if (!entries.length) return;

	const instance = getInstance();
	if (!instance) return;

	const monitoringEndpoint = getMonitoringEndpoint() as string;
	if (!monitoringEndpoint) return;

	return fetch(monitoringEndpoint, {
		body: JSON.stringify(entries),
		credentials: 'include',
		mode: 'cors',
		method: 'POST',
		headers: { 'content-type': 'application/json' }
	})
		.then(responseHandler)
		.catch(() => null);
};

export default sendMonitoringData;
