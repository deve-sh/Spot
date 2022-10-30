import { v4 } from 'uuid';

import type MonitoringEntry from './types/MonitoringEntry';
import type LogTypes from './types/LogTypes';
import UserDetails, { defaultUserDetails } from './types/UserDetails';

import { getInstance, setInstance } from './utils/instance';
import setupMonitoring from './utils/setupMonitoringInterval';
import setupLogInterception from './utils/setupLogInterception';

class Spot {
	public projectId: string = '';
	public userDetails: UserDetails = defaultUserDetails;
	public sessionId: string = '';

	constructor(projectId: string, userDetails?: UserDetails) {
		if (getInstance()) return;

		this.projectId = projectId;
		this.userDetails = userDetails || defaultUserDetails;
		this.sessionId = v4();
		setInstance(this); // Singleton for a single environment.

		setupMonitoring();
		setupLogInterception();
	}

	identify(userDetails: UserDetails) {
		this.userDetails = userDetails;
	}

	sendEntries(entries: MonitoringEntry[]) {}

	sendLogs(logType: LogTypes, logs: any[]) {}
}

export default Spot;
