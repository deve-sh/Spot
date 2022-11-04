import useFetch from 'src/hooks/useFetch';
import { getSessionLogsAPIEndpoint } from 'src/utils/endpoints/session';

interface Props {
	sessionId: string;
	projectId: string;
	page: number;
}

const SessionLogs = ({ projectId, sessionId, page = 0 }: Props) => {
	const { data, error } = useFetch(
		getSessionLogsAPIEndpoint({ projectId, sessionId, offset: page * 25 })
	);
	return <></>;
};

export default SessionLogs;
