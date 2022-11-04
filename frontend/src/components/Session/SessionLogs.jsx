import useFetch from 'src/hooks/useFetch';
import { getSessionLogsAPIEndpoint } from 'src/utils/endpoints/session';

const SessionLogs = ({ projectId, sessionId, offset = 0 }) => {
	const { data, error } = useFetch(getSessionLogsAPIEndpoint({ projectId, sessionId, offset }));
	return <></>;
};

export default SessionLogs;
