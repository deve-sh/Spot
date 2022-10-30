import config from '../config';

const setupMonitoringInterval = () => {
	globalThis.setInterval(function () {}, config.MONITORING_INTERVAL);
};

export default setupMonitoringInterval;
