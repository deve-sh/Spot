import type TraceEntry from '../types/TraceEntry';

import { getInstance } from '../utils/instance';
import config from '../config';
import send from '../utils/send';

import getTracesEndpoint from './getTracesEndpoint';

let tracesQueue: TraceEntry[] = [];
let tracesAPICallDebounceTimeout: NodeJS.Timeout | undefined;

const sendTracingData = (traceEntry: TraceEntry) => {
	const instance = getInstance();
	if (!instance) return;

	const tracesEndpoint = getTracesEndpoint() as string;
	if (!tracesEndpoint) return;

	tracesQueue.push(traceEntry);

	if (tracesAPICallDebounceTimeout) clearTimeout(tracesAPICallDebounceTimeout);
	tracesAPICallDebounceTimeout = setTimeout(() => {
		send(tracesEndpoint, JSON.parse(JSON.stringify(tracesQueue)));
		tracesQueue = [];
	}, config.TRACES_SENDING_DEBOUNCE_TIME);
};

export default sendTracingData;
