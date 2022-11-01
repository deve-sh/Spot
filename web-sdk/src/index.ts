import type MonitoringEntry from './types/MonitoringEntry';
import type LogEntry from './types/LogEntry';
import UserDetails, { defaultUserDetails } from './types/UserDetails';

import getUniqueSessionId from './session/getUniqueSessionId';
import { getInstance, setInstance } from './utils/instance';
import setupMonitoring from './monitoring/setupMonitoringInterval';
import setupLogInterception from './logging/setupLogInterception';

class Spot {
	public projectId: string = '';
	public userDetails: UserDetails = defaultUserDetails;
	public sessionId: string = '';

	constructor(projectId: string, userDetails?: UserDetails) {
		if (getInstance()) return;

		this.projectId = projectId;
		this.userDetails = userDetails || defaultUserDetails;
		this.sessionId = getUniqueSessionId();
		setInstance(this); // Singleton for a single environment.

		setupMonitoring();
		setupLogInterception();
	}

	identify(userDetails: UserDetails) {
		this.userDetails = userDetails;
	}

	sendEntries(entries: MonitoringEntry[]) {}

	sendLogs(logs: LogEntry[]) {}
}

export default Spot;
