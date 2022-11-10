import getActiveSessionId from '../session/getAlreadyActiveSessionId';
import type TraceEntry from '../types/TraceEntry';
import sendTracingData from './sendTracingData';

// Traces are a way to measure the timing of custom App level code.
class Trace {
	private uniqueName: string;
	private startMark: string;
	private endMark: string;
	private traceName: string;

	constructor(traceName: string) {
		if (!traceName) throw new Error('Please provide a value for trace to the .trace function');

		this.uniqueName = `Spot-${new Date().getTime()}-${traceName}`;
		this.startMark = this.uniqueName + '-START';
		this.endMark = this.uniqueName + '-END';
		this.traceName = traceName;
	}

	public start() {
		performance.mark(this.startMark);
	}

	public stop() {
		performance.mark(this.endMark);

		// Measure the duration between the two marks
		performance.measure(this.uniqueName, this.startMark, this.endMark);

		// Get the performance impact.
		const traceMeasure = performance.getEntriesByName(this.uniqueName)[0];
		const traceEntry: TraceEntry = {
			duration: traceMeasure.duration,
			trace_name: this.traceName,
			location: JSON.stringify(location),
			startTime: traceMeasure.startTime,
			startedAt: performance.timeOrigin + traceMeasure.startTime,
			sessionId: getActiveSessionId() as string
		};
		sendTracingData(traceEntry);
	}
}

export default Trace;
