import useFetch from 'hooks/useFetch';
import { useRouter } from 'next/router';
import { getSessionVitalsEndpoint, type ProjectAndSessionProp } from 'utils/endpoints/session';

const useSessionVitals = () => {
	const {
		query: { projectId, sessionId }
	} = useRouter();
	return useFetch(getSessionVitalsEndpoint({ projectId, sessionId } as ProjectAndSessionProp));
};

export default useSessionVitals;
