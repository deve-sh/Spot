import useFetch from 'hooks/useFetch';
import { useRouter } from 'next/router';
import {
	getSessionNetworkCallsEndpoint,
	type ProjectAndSessionProp
} from 'utils/endpoints/session';

const useSessionNetworkCalls = () => {
	const {
		query: { projectId, sessionId }
	} = useRouter();
	return useFetch(
		getSessionNetworkCallsEndpoint({ projectId, sessionId } as ProjectAndSessionProp)
	);
};

export default useSessionNetworkCalls;
