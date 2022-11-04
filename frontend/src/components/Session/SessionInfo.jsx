import useFetch from 'src/hooks/useFetch';
import { getSessionAPIEndpoint } from 'src/utils/endpoints/session';

const SessionInfo = ({ projectId, sessionId }) => {
	const { data, error } = useFetch(getSessionAPIEndpoint({ projectId, sessionId }));
	return <></>;
};

export default SessionInfo;
