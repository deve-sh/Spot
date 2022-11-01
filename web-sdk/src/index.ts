import type MonitoringEntry from './types/MonitoringEntry';
import type LogEntry from './types/LogEntry';
import UserDetails, { defaultUserDetails } from './types/UserDetails';

import { getInstance, setInstance } from './utils/instance';

import getUniqueSessionId from './session/getUniqueSessionId';
import getActiveSessionId from './session/getAlreadyActiveSessionId';
import setSessionCookie from './session/setSessionCookie';

import setupMonitoring from './monitoring/setupMonitoringInterval';
import setupLogInterception from './logging/setupLogInterception';
import sendLoggingData from './logging/sendLoggingData';
import sendMonitoringData from './monitoring/sendMonitoringData';

class Spot {
	public projectId: string = '';
	public userDetails: UserDetails = defaultUserDetails;
	public sessionId: string = '';

	constructor(projectId: string, userDetails?: UserDetails) {
		if (getInstance()) return;

		this.projectId = projectId;
		this.userDetails = userDetails || defaultUserDetails;

		// Session ID Deduplication
		const alreadyActiveSessionId = getActiveSessionId();
		if (alreadyActiveSessionId) this.sessionId = alreadyActiveSessionId;
		else this.sessionId = getUniqueSessionId();
		setSessionCookie(this.sessionId);

		setInstance(this); // Singleton for a single environment.

		setupMonitoring();
		setupLogInterception();
	}

	identify(userDetails: UserDetails) {
		this.userDetails = userDetails;
	}

	sendEntries(entries: MonitoringEntry[]) {
		sendMonitoringData(entries);
	}

	sendLogs(logs: LogEntry[]) {
		sendLoggingData(logs);
	}
}

export default Spot;
