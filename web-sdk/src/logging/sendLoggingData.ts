import type LogEntry from '../types/LogEntry';
import { getInstance } from '../utils/instance';
import getLoggingEndpoint from './getLoggingEndpoint';

const sendLoggingData = (logEntries: LogEntry[]) => {
	if (!logEntries.length) return;

	const instance = getInstance();
	if (!instance) return;

	const loggingEndpoint = getLoggingEndpoint() as string;
	if (!loggingEndpoint) return;

	return fetch(loggingEndpoint, {
		body: JSON.stringify(logEntries),
		credentials: 'include',
		mode: 'cors',
		method: 'POST',
		headers: { 'content-type': 'application/json' }
	}).catch(() => null);
};

export default sendLoggingData;
