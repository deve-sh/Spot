type TraceEntry = {
	trace_name: string;
	duration: number;
	startedAt: number;
	startTime: number;
	location: string;
	sessionId: string;
};

export default TraceEntry;
