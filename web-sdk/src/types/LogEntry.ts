import type LogTypes from './LogTypes';

export type LogFragment = {
	type: string;
	value: string;
};

type LogEntry = {
	severity: LogTypes;
	fragments: LogFragment[];
};

export default LogEntry;
