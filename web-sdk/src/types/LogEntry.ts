import type LogTypes from './LogTypes';

export type LogFragment = {
	type: string;
	value: string;
};

type LogEntry = {
	severity: LogTypes;
	fragments: LogFragment[];
	at: number; // timestamp
	sessionId: string;
};

export default LogEntry;
