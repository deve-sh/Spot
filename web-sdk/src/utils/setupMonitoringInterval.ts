import config from '../config';
import mapPerformanceEntries from '../monitoring/mapPerformanceEntries';

const setupMonitoring = () => {
	globalThis.setInterval(mapPerformanceEntries, config.MONITORING_INTERVAL);
};

export default setupMonitoring;
