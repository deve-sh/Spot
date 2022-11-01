export type NetworkCallEntry = {
	type: 'network-call';
	bodySize: number;
	responseSize: number;
	duration: number;
	url: string;
	timeToResponse: number;
	startedAt: number;
	sessionId?: string;
};

export interface NavigationTypeEntry extends PerformanceNavigationTiming {
	location: string; // JSON.stringify(window.location);
	sessionId?: string;
	type: 'navigate';
}

export interface VitalsEntry {
	vitalsType: 'fcp' | 'fp';
	value: number;
	location: string; // JSON.stringify(window.location);
	sessionId?: string;
	type: 'vitals';
}

type MonitoringEntry = NetworkCallEntry | NavigationTypeEntry | VitalsEntry;

export default MonitoringEntry;
