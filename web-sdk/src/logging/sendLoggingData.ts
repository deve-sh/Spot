import type LogEntry from '../types/LogEntry';
import { getInstance } from '../utils/instance';
import send from '../utils/send';

import getLoggingEndpoint from './getLoggingEndpoint';

const sendLoggingData = (logEntries: LogEntry[]) => {
	if (!logEntries.length) return;

	const instance = getInstance();
	if (!instance) return;

	const loggingEndpoint = getLoggingEndpoint() as string;
	if (!loggingEndpoint) return;

	return send(loggingEndpoint, logEntries);
};

export default sendLoggingData;
