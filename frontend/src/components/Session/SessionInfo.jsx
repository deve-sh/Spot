import useFetch from '../../../../frontend-dashboard/src/hooks/useFetch';
import { getSessionAPIEndpoint } from '../../../../frontend-dashboard/src/utils/endpoints/session';

const SessionInfo = ({ projectId, sessionId }) => {
	const { data, error } = useFetch(getSessionAPIEndpoint({ projectId, sessionId }));
	return <></>;
};

export default SessionInfo;
