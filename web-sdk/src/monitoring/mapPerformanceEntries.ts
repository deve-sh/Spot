import { getInstance } from '../utils/instance';
import type { NavigationTypeEntry, NetworkCallEntry, VitalsEntry } from '../types/MonitoringEntry';

let lastCount = 0;

const mapPerformanceEntries = () => {
	// Performance API not supported
	if (typeof globalThis.performance === 'undefined') return;

	const entries = globalThis.performance.getEntries();
	if (!entries.length) return;

	const remainingEntries = entries.slice(lastCount, entries.length);
	const monitoringEntries = [];
	const location = JSON.stringify({
		...globalThis.location,
		fullBasePath: globalThis.location.origin + globalThis.location.pathname
	});

	for (let i = 0; i < remainingEntries.length; i += 1) {
		const entry = remainingEntries[i];

		if (entry instanceof PerformanceResourceTiming) {
			if (['fetch', 'xmlhttprequest'].includes(entry.initiatorType)) {
				// Network/API Calls
				monitoringEntries.push({
					type: 'network-call',
					bodySize: entry.encodedBodySize,
					responseSize: entry.transferSize,
					duration: entry.duration,
					url: entry.name
				} as NetworkCallEntry);
			}
		}
		if (entry instanceof PerformanceNavigationTiming) {
			// Contains info like domInteractive, domContentLoaded benchmarks.
			monitoringEntries.push({ location, ...entry } as NavigationTypeEntry);
		}
		if (entry instanceof PerformancePaintTiming) {
			if (entry.name === 'first-contentful-paint')
				monitoringEntries.push({ location, fcp: entry.startTime } as VitalsEntry);
			if (entry.name === 'first-paint')
				monitoringEntries.push({ location, fp: entry.startTime } as VitalsEntry);
		}
	}

	lastCount = entries.length - 1;

	const instance = getInstance();
	if (instance) instance.sendEntries(monitoringEntries); // Dispatch API call to send these entries to backend.
};

export default mapPerformanceEntries;
