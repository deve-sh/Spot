import useFetch from '../../hooks/useFetch';
import { getSessionLogsAPIEndpoint } from '../../utils/endpoints/session';

const SessionLogs = ({ projectId, sessionId, offset = 0 }) => {
	const { data, error } = useFetch(getSessionLogsAPIEndpoint({ projectId, sessionId, offset }));
	return <></>;
};

export default SessionLogs;
