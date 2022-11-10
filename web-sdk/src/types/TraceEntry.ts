type TraceEntry = {
	traceName: string;
	duration: number;
	startedAt: number;
	startTime: number;
	location: string;
	sessionId: string;
};

export default TraceEntry;
