import { useMemo } from 'react';
import useFetch from 'hooks/useFetch';
import { useRouter } from 'next/router';
import { getListProjectSessionsEndpoint } from 'utils/endpoints/project';

interface Properties {
	offset: number;
	filters?: Record<string, any> | null;
}

const useProjectSessions = ({ offset, filters }: Properties) => {
	const {
		query: { projectId }
	} = useRouter();
	const endpoint = useMemo(
		() => getListProjectSessionsEndpoint({ projectId: projectId as string, offset }),
		[projectId, offset]
	);
	return useFetch(endpoint, { body: filters || {} });
};

export default useProjectSessions;
