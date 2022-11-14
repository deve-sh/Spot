import { useRouter } from 'next/router';
import useFetch from 'hooks/useFetch';
import { getProjectEndpoint } from 'utils/endpoints/project';

const useProject = (projectId?: string) => {
	const {
		query: { projectId: projectIdFromQuery }
	} = useRouter();
	return useFetch(
		projectId || projectIdFromQuery
			? getProjectEndpoint(projectId || (projectIdFromQuery as string))
			: null
	);
};

export default useProject;
