import { useMemo } from 'react';
import { useRouter } from 'next/router';

import useFetch from 'hooks/useFetch';
import { getOverallVitalsForProjectEndpoint } from 'utils/endpoints/project';

const useProjectVitals = () => {
	const {
		query: { projectId }
	} = useRouter();
	const endpoint = useMemo(
		() =>
			projectId
				? getOverallVitalsForProjectEndpoint({ projectId: projectId as string })
				: null,
		[projectId]
	);
	return useFetch(endpoint);
};

export default useProjectVitals;
