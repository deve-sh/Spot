import { getInstance } from '../utils/instance';

import type LogEntry from '../types/LogEntry';
import type LogTypes from '../types/LogTypes';
import { LogFragment } from '../types/LogEntry';
import config from '../config';

let alreadyInterceptedLogging: boolean;
let logsQueue: LogEntry[] = [];
let logsAPICallDebounceTimeout: NodeJS.Timeout | undefined;

const processLogFragment = (logFragment: any): LogFragment => ({
	type: typeof logFragment,
	value: typeof logFragment !== 'string' ? JSON.stringify(logFragment) : logFragment
});

const processLog = (logFragments: any[], severity: LogTypes): LogEntry => {
	const { sessionId } = getInstance() || { sessionId: '' };
	return {
		fragments: logFragments.map(processLogFragment),
		severity,
		at: new Date().getTime(),
		sessionId
	};
};

const releaseLogs = () => {
	// Send logs from log queue.
	if (!logsQueue.length) return;

	const instance = getInstance();
	if (!instance) return;

	instance.sendLogs(JSON.parse(JSON.stringify(logsQueue))); // Create a deep copy of the log entries array and sent to API.

	logsQueue = [];
	logsAPICallDebounceTimeout = clearTimeout(logsAPICallDebounceTimeout) as undefined;
};

const setLogReleaseTimer = () => {
	if (logsAPICallDebounceTimeout)
		logsAPICallDebounceTimeout = clearTimeout(logsAPICallDebounceTimeout) as undefined;
	logsAPICallDebounceTimeout = setTimeout(releaseLogs, config.LOG_SENDING_DEBOUNCE_TIME);
};

const interceptLogs = () => {
	if (alreadyInterceptedLogging) return;
	alreadyInterceptedLogging = true;

	const originalConsoleLog = console.log;
	const originalConsoleWarn = console.warn;
	const originalConsoleError = console.error;

	console.log = function (...logFragments) {
		originalConsoleLog(...logFragments);
		logsQueue.push(processLog(logFragments, 'info'));
		setLogReleaseTimer();
	};

	console.warn = function (...logFragments) {
		originalConsoleWarn(...logFragments);
		logsQueue.push(processLog(logFragments, 'warn'));
		setLogReleaseTimer();
	};

	console.error = function (...logFragments) {
		originalConsoleError(...logFragments);
		logsQueue.push(processLog(logFragments, 'error'));
		setLogReleaseTimer();
	};
};

export default interceptLogs;
