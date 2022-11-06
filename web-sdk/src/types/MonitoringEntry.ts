export type PageResourcesEntry = {
	type: 'page-resource';
	resourceType: 'script' | 'link' | 'img';
	bodySize: number;
	responseSize: number;
	duration: number;
	url: string;
	timeToResponse: number;
	startedAt: number;
	totalWaitingTime: number;
	sessionId?: string;
};

export type NetworkCallEntry = {
	type: 'network-call';
	bodySize: number;
	responseSize: number;
	duration: number;
	url: string;
	timeToResponse: number;
	startedAt: number;
	totalWaitingTime: number;
	sessionId?: string;
};

export interface NavigationTypeEntry extends PerformanceNavigationTiming {
	location: string; // JSON.stringify(window.location);
	sessionId?: string;
	type: 'navigate';
}

export interface VitalsEntry {
	vitalType: 'fcp' | 'fp' | 'fid';
	value: number;
	location: string; // JSON.stringify(window.location);
	sessionId?: string;
	type: 'vitals';
}

type MonitoringEntry = NetworkCallEntry | NavigationTypeEntry | VitalsEntry | PageResourcesEntry;

export default MonitoringEntry;
