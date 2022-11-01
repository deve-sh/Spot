import type MonitoringEntry from '../types/MonitoringEntry';
import { getInstance } from '../utils/instance';
import send from '../utils/send';

import getMonitoringEndpoint from './getMonitoringEndpoint';

const sendMonitoringData = (entries: MonitoringEntry[]) => {
	if (!entries.length) return;

	const instance = getInstance();
	if (!instance) return;

	const monitoringEndpoint = getMonitoringEndpoint() as string;
	if (!monitoringEndpoint) return;

	return send(monitoringEndpoint, entries);
};

export default sendMonitoringData;
