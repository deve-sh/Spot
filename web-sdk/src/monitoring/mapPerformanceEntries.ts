import type { NavigationTypeEntry, NetworkCallEntry, VitalsEntry } from '../types/MonitoringEntry';

import { getInstance } from '../utils/instance';
import config from '../config';

let lastProcessedLogsTill = 0;

const mapPerformanceEntries = () => {
	// Performance API not supported
	if (typeof globalThis.performance === 'undefined') return;

	const entries = globalThis.performance.getEntries();
	if (!entries.length) return;

	const remainingEntries = entries.slice(lastProcessedLogsTill, entries.length);
	const monitoringEntries = [];
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
					startedAt: entry.startTime + performance.timeOrigin,
					timeToResponse: entry.responseEnd - entry.startTime
				} as NetworkCallEntry);
			}
		}
		if (entry instanceof PerformanceNavigationTiming) {
			// Contains info like domInteractive, domContentLoaded benchmarks.
			monitoringEntries.push({ location, ...entry.toJSON() } as NavigationTypeEntry);
		}
		if (entry instanceof PerformancePaintTiming) {
			if (entry.name === 'first-contentful-paint')
				monitoringEntries.push({ location, fcp: entry.startTime } as VitalsEntry);
			if (entry.name === 'first-paint')
				monitoringEntries.push({ location, fp: entry.startTime } as VitalsEntry);
		}
	}

	lastProcessedLogsTill = entries.length - 1;

	const instance = getInstance();
	if (instance && monitoringEntries.length) instance.sendEntries(monitoringEntries); // Dispatch API call to send these entries to backend.
};

export default mapPerformanceEntries;
