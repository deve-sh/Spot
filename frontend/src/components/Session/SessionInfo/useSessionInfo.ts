import useFetch from 'hooks/useFetch';
import { useRouter } from 'next/router';
import { getSessionAPIEndpoint } from 'utils/endpoints/session';

interface Properties {
	projectId: string;
	sessionId: string;
}

const useSessionInfo = () => {
	const {
		query: { projectId, sessionId }
	} = useRouter();

	return useFetch(getSessionAPIEndpoint({ projectId, sessionId } as Properties));
};

export default useSessionInfo;
