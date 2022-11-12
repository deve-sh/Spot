import useFetch from 'hooks/useFetch';
import { useRouter } from 'next/router';
import { getListProjectSessionsEndpoint } from 'utils/endpoints/project';

interface Properties {
	offset: number;
}

const useProjectSessions = ({ offset }: Properties) => {
	const {
		query: { projectId }
	} = useRouter();
	return useFetch(getListProjectSessionsEndpoint({ projectId: projectId as string, offset }));
};

export default useProjectSessions;
