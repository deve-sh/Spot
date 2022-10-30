import { v4 } from 'uuid';
import MonitoringEntry from './types/MonitoringEntry';

import UserDetails, { defaultUserDetails } from './types/UserDetails';
import { getInstance, setInstance } from './utils/instance';
import setupMonitoringInterval from './utils/setupMonitoringInterval';

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

		// Setup Monitoring Interval
		setupMonitoringInterval();
	}

	identify(userDetails: UserDetails) {
		this.userDetails = userDetails;
	}

	sendEntries(entries: MonitoringEntry[]) {}
}

export default Spot;
