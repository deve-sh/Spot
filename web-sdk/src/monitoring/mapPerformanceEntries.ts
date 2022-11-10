import MonitoringEntry, {
	type NavigationTypeEntry,
	type NetworkCallEntry,
	type PageResourcesEntry,
	type VitalsEntry
} from '../types/MonitoringEntry';

import { getInstance } from '../utils/instance';
import config from '../config';

let lastProcessedLogsTill = 0;

const mapPerformanceEntries = () => {
	// Performance API not supported
	if (typeof globalThis.performance === 'undefined') return;
	const instance = getInstance();
	if (!instance) return;

	const entries = globalThis.performance.getEntries();
	if (!entries.length) return;

	const remainingEntries = entries.slice(lastProcessedLogsTill, entries.length);
	let monitoringEntries: MonitoringEntry[] = [];
	const location = JSON.stringify({
		...globalThis.location,
		fullBasePath: globalThis.location.origin + globalThis.location.pathname
	});

	for (let i = 0; i < remainingEntries.length; i += 1) {
		const entry = remainingEntries[i];

		if (entry instanceof PerformanceResourceTiming) {
			if (
				['fetch', 'xmlhttprequest'].includes(entry.initiatorType) &&
				!entry.name.includes(config.BACKEND_URL)
			) {
				// Network/API Calls
				monitoringEntries.push({
					type: 'network-call',
					bodySize: entry.encodedBodySize,
					responseSize: entry.transferSize,
					duration: entry.duration,
					url: entry.name.split('?')[0],
					startTime: entry.startTime,
					startedAt: entry.startTime + performance.timeOrigin,
					totalWaitingTime: Math.abs(entry.fetchStart - entry.startTime),
					timeToResponse: entry.responseEnd - entry.requestStart
				} as NetworkCallEntry);
			}
			if (
				['script', 'img', 'link'].includes(entry.initiatorType) &&
				!entry.name.includes(config.BACKEND_URL)
			) {
				// Network/API Calls
				monitoringEntries.push({
					type: 'page-resource',
					resourceType: entry.initiatorType,
					bodySize: entry.encodedBodySize,
					responseSize: entry.transferSize,
					duration: entry.duration,
					url: entry.name.split('?')[0],
					startTime: entry.startTime,
					startedAt: entry.startTime + performance.timeOrigin,
					totalWaitingTime: Math.abs(entry.fetchStart - entry.startTime),
					timeToResponse: entry.responseEnd - entry.requestStart
				} as PageResourcesEntry);
			}
		}
		if (entry instanceof PerformanceNavigationTiming) {
			// Contains info like domInteractive, domContentLoaded benchmarks.
			monitoringEntries.push({
				type: 'navigate',
				location,
				...entry.toJSON()
			} as NavigationTypeEntry);
		}
		if (entry instanceof PerformancePaintTiming) {
			if (entry.name === 'first-contentful-paint')
				monitoringEntries.push({
					vitalType: 'fcp',
					type: 'vitals',
					location,
					value: entry.startTime
				} as VitalsEntry);
			if (entry.name === 'first-paint')
				monitoringEntries.push({
					location,
					type: 'vitals',
					vitalType: 'fcp',
					value: entry.startTime
				} as VitalsEntry);
		}
		if (entry instanceof PerformanceEventTiming) {
			if (entry.entryType === 'first-input') {
				// FID
				monitoringEntries.push({
					location,
					type: 'vitals',
					vitalType: 'fid',
					value: entry.startTime
				} as VitalsEntry);
			}
		}
	}

	lastProcessedLogsTill = entries.length;

	if (monitoringEntries.length) {
		monitoringEntries = monitoringEntries.map((entry) => ({
			...entry,
			sessionId: instance.sessionId
		}));
		instance.sendEntries(monitoringEntries); // Dispatch API call to send these entries to backend.
	}
};

export default mapPerformanceEntries;
