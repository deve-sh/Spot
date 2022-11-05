export type LogSeverity = 'info' | 'warn' | 'error';

export interface LogType {
	created_at: string;
	fragments: { type: string; value: any }[];
	id: string;
	log_time: string;
	severity: LogSeverity;
}
