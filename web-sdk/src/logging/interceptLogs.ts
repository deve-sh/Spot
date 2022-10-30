import { getInstance } from '../utils/instance';

let alreadyInterceptedLogging: boolean;

const processLogFragment = (logFragment: any) => ({
	type: typeof logFragment,
	value: typeof logFragment !== 'string' ? JSON.stringify(logFragment) : logFragment
});

const processLog = (logs: any[]) => logs.map(processLogFragment);

const interceptLogs = () => {
	if (alreadyInterceptedLogging) return;
	alreadyInterceptedLogging = true;

	const originalConsoleLog = console.log;
	const originalConsoleWarn = console.warn;
	const originalConsoleError = console.error;

	console.log = function (...args) {
		originalConsoleLog(...args);
		const instance = getInstance();
		if (instance) instance.sendLogs('info', processLog(args));
	};

	console.warn = function (...args) {
		originalConsoleWarn(...args);
		const instance = getInstance();
		if (instance) instance.sendLogs('warn', processLog(args));
	};

	console.error = function (...args) {
		originalConsoleError(...args);
		const instance = getInstance();
		if (instance) instance.sendLogs('error', processLog(args));
	};
};

export default interceptLogs;
