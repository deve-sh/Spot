import type MonitoringEntry from './types/MonitoringEntry';
import type LogEntry from './types/LogEntry';
import UserDetails, { defaultUserDetails } from './types/UserDetails';

import { getInstance, setInstance } from './utils/instance';

import send from './utils/send';
import getUniqueSessionId from './session/getUniqueSessionId';
import getActiveSessionId from './session/getAlreadyActiveSessionId';
import setSessionCookie from './session/setSessionCookie';
import getSessionEndpoint from './session/getSessionEndpoint';
import getSessionIdentifyEndpoint from './session/getSessionIdentifyEndpoint';

import setupMonitoring from './monitoring/setupMonitoringInterval';
import setupLogInterception from './logging/setupLogInterception';
import sendLoggingData from './logging/sendLoggingData';
import sendMonitoringData from './monitoring/sendMonitoringData';

class Spot {
	public projectId: string = '';
	public userDetails: UserDetails = defaultUserDetails;
	public sessionId: string = '';
	public canSendAPICalls: boolean = true;
	public apiKey: string = '';

	constructor(projectId: string, apiKey: string, userDetails?: UserDetails) {
		if (getInstance()) return;

		if (!projectId || !apiKey) throw new Error('Project ID and API Key are required.');

		this.projectId = projectId;
		this.apiKey = apiKey;
		this.userDetails = userDetails || defaultUserDetails;

		// Session ID Deduplication
		const alreadyActiveSessionId = getActiveSessionId();
		if (alreadyActiveSessionId) this.sessionId = alreadyActiveSessionId;
		else this.sessionId = getUniqueSessionId();
		setSessionCookie(this.sessionId);
		send(getSessionEndpoint() as string, { url: window.location.href });

		setInstance(this); // Singleton for a single environment.

		setupMonitoring();
		setupLogInterception();
	}

	identify(userDetails: UserDetails) {
		this.userDetails = userDetails;
		send(getSessionIdentifyEndpoint() as string, { url: window.location.href });
	}

	sendEntries(entries: MonitoringEntry[]) {
		sendMonitoringData(entries);
	}

	sendLogs(logs: LogEntry[]) {
		sendLoggingData(logs);
	}
}

export default Spot;
