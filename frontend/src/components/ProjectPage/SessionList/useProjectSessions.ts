import { useMemo } from 'react';
import { useRouter } from 'next/router';

import useFetch from 'hooks/useFetch';
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
		() =>
			projectId
				? getListProjectSessionsEndpoint({
						projectId: projectId as string,
						offset,
						filters
				  })
				: null,
		[projectId, offset, filters]
	);
	return useFetch(endpoint);
};

export default useProjectSessions;
