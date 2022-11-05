import useFetch from 'hooks/useFetch';
import { useRouter } from 'next/router';
import { getSessionAPIEndpoint, type ProjectAndSessionProp } from 'utils/endpoints/session';

const useSessionInfo = () => {
	const {
		query: { projectId, sessionId }
	} = useRouter();

	return useFetch(getSessionAPIEndpoint({ projectId, sessionId } as ProjectAndSessionProp));
};

export default useSessionInfo;
