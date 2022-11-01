import config from '../config';
import mapPerformanceEntries from './mapPerformanceEntries';

const setupMonitoring = () => {
	globalThis.setInterval(mapPerformanceEntries, config.MONITORING_INTERVAL);
};

export default setupMonitoring;
