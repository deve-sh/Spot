import { useMemo } from 'react';
import { useRouter } from 'next/router';

import useFetch from 'hooks/useFetch';
import { getThisMonthUsageForProject } from 'utils/endpoints/project';

const useProjectMonthUsage = () => {
	const {
		query: { projectId }
	} = useRouter();
	const endpoint = useMemo(
		() => (projectId ? getThisMonthUsageForProject({ projectId: projectId as string }) : null),
		[projectId]
	);
	return useFetch(endpoint);
};

export default useProjectMonthUsage;
