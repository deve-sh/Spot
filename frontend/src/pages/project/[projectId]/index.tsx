import useProject from 'hooks/api/useProject';
import { useRouter } from 'next/router';

import SEO from 'components/SEO';
import SessionList from 'components/ProjectPage/SessionList';

const ProjectPage = () => {
	const {
		query: { projectId }
	} = useRouter();
	const { data: { project } = {} } = useProject(projectId as string);
	return (
		<>
			<SEO title={`Spot | ${project?.project_name || `Project ${projectId}`}`} />
			<SessionList />
		</>
	);
};

export default ProjectPage;
