import { useMemo } from 'react';
import { useRouter } from 'next/router';

import useFetch from 'hooks/useFetch';
import { getListTopTracesForProjectEndpoint } from 'utils/endpoints/project';

interface Properties {
	offset: number;
}

const useProjectTopTraces = ({ offset }: Properties) => {
	const {
		query: { projectId }
	} = useRouter();
	const endpoint = useMemo(
		() =>
			projectId
				? getListTopTracesForProjectEndpoint({ projectId: projectId as string, offset })
				: null,
		[projectId, offset]
	);
	return useFetch(endpoint);
};

export default useProjectTopTraces;
