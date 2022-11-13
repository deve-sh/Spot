import { useMemo } from 'react';
import { useRouter } from 'next/router';

import useFetch from 'hooks/useFetch';
import { getTopSessionDomainsForProjectEndpoint } from 'utils/endpoints/project';

const useProjectTopURLs = () => {
	const {
		query: { projectId }
	} = useRouter();
	const endpoint = useMemo(
		() =>
			projectId
				? getTopSessionDomainsForProjectEndpoint({
						projectId: projectId as string
				  })
				: null,
		[projectId]
	);
	return useFetch(endpoint);
};

export default useProjectTopURLs;
