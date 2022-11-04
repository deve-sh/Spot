import useFetch from 'hooks/useFetch';
import { getSessionAPIEndpoint } from 'utils/endpoints/session';

interface Props {
	sessionId: string;
	projectId: string;
}

const SessionInfo = ({ projectId, sessionId }: Props) => {
	const { data, error } = useFetch(getSessionAPIEndpoint({ projectId, sessionId }));
	return <></>;
};

export default SessionInfo;
