export type NetworkCallEntry = {
	type: 'network-call';
	bodySize: number;
	responseSize: number;
	duration: number;
	url: string;
	timeToResponse: number;
	startedAt: number;
};

export interface NavigationTypeEntry extends PerformanceNavigationTiming {
	location: string; // JSON.stringify(window.location);
}

export interface VitalsEntry {
	fcp?: number;
	fp?: number;
	location: string; // JSON.stringify(window.location);
}

type MonitoringEntry = NetworkCallEntry | NavigationTypeEntry | VitalsEntry;

export default MonitoringEntry;
