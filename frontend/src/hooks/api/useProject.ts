import useFetch from 'hooks/useFetch';
import { getProjectEndpoint } from 'utils/endpoints/project';

const useProject = (projectId: string) =>
	useFetch(projectId ? getProjectEndpoint(projectId) : null);

export default useProject;
