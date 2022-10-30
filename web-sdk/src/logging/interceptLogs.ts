import { getInstance } from '../utils/instance';

import type LogEntry from '../types/LogEntry';
import type LogTypes from '../types/LogTypes';
import { LogFragment } from '../types/LogEntry';

let alreadyInterceptedLogging: boolean;
let logsQueue: LogEntry[] = [];

const processLogFragment = (logFragment: any): LogFragment => ({
	type: typeof logFragment,
	value: typeof logFragment !== 'string' ? JSON.stringify(logFragment) : logFragment
});

const processLog = (logFragments: any[], severity: LogTypes): LogEntry => ({
	fragments: logFragments.map(processLogFragment),
	severity
});

const interceptLogs = () => {
	if (alreadyInterceptedLogging) return;
	alreadyInterceptedLogging = true;

	const originalConsoleLog = console.log;
	const originalConsoleWarn = console.warn;
	const originalConsoleError = console.error;

	console.log = function (...logFragments) {
		originalConsoleLog(...logFragments);
		logsQueue.push(processLog(logFragments, 'info'));
	};

	console.warn = function (...logFragments) {
		originalConsoleWarn(...logFragments);
		logsQueue.push(processLog(logFragments, 'warn'));
	};

	console.error = function (...logFragments) {
		originalConsoleError(...logFragments);
		logsQueue.push(processLog(logFragments, 'error'));
	};
};

export default interceptLogs;
