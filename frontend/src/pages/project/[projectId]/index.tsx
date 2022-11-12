import useProject from 'hooks/api/useProject';
import { useRouter } from 'next/router';

import SEO from 'components/SEO';
import SessionList from 'components/ProjectPage/SessionList';
import { useDisclosure } from '@chakra-ui/react';
import ProjectHeader from 'components/ProjectPage/ProjectHeader';
import ProjectIntegrationsInstruction from 'components/ProjectPage/IntegrationsInstruction';

const ProjectPage = () => {
	const {
		query: { projectId }
	} = useRouter();
	const { data: { project } = {} } = useProject(projectId as string);
	const {
		isOpen: showIntegrationInstruction,
		onOpen: openIntegrationInstruction,
		onClose: closeIntegrationInstruction
	} = useDisclosure();

	return (
		<>
			<SEO title={`Spot | ${project?.project_name || `Project ${projectId}`}`} />
			<ProjectHeader openIntegrationInstruction={openIntegrationInstruction} />
			<ProjectIntegrationsInstruction
				isOpen={showIntegrationInstruction}
				close={closeIntegrationInstruction}
			/>
			<SessionList />
		</>
	);
};

export default ProjectPage;
