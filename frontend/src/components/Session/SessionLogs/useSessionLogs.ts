import useFetch from 'hooks/useFetch';
import { useRouter } from 'next/router';
import { getSessionLogsAPIEndpoint, type LogsProps } from 'utils/endpoints/session';

interface Properties {
	offset: number;
}

const useSessionLogs = ({ offset }: Properties) => {
	const {
		query: { projectId, sessionId }
	} = useRouter();
	return useFetch(getSessionLogsAPIEndpoint({ projectId, sessionId, offset } as LogsProps));
};

export default useSessionLogs;
