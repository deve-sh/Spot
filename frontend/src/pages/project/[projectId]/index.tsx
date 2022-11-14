import useProject from 'hooks/api/useProject';
import { useRouter } from 'next/router';
import { useDisclosure } from '@chakra-ui/react';

import SEO from 'components/SEO';

import ProjectHeader from 'components/ProjectPage/ProjectHeader';
import ProjectVitals from 'components/ProjectPage/ProjectVitals';
import ProjectTopTracesList from 'components/ProjectPage/TracesList';
import SessionList from 'components/ProjectPage/SessionList';
import ProjectIntegrationsInstruction from 'components/ProjectPage/IntegrationsInstruction';
import ProjectTopURLs from 'components/ProjectPage/TopURLs';
import ProjectTopSessionDomains from 'components/ProjectPage/TopSessionDomains';
import ProjectMonthUsageModal from 'components/ProjectPage/ProjectMonthUsage';

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
	const {
		isOpen: showProjectMonthlyUsage,
		onOpen: openProjectMonthlyUsage,
		onClose: closeProjectMonthlyUsage
	} = useDisclosure();

	return (
		<>
			<SEO title={`Spot | ${project?.project_name || `Project ${projectId}`}`} />
			<ProjectHeader
				openIntegrationInstruction={openIntegrationInstruction}
				openProjectMonthlyUsage={openProjectMonthlyUsage}
			/>
			<ProjectVitals openIntegrationInstruction={openIntegrationInstruction} />
			<ProjectIntegrationsInstruction
				isOpen={showIntegrationInstruction}
				close={closeIntegrationInstruction}
			/>
			<ProjectTopTracesList />
			<ProjectTopURLs />
			<SessionList />
			<ProjectTopSessionDomains />
			{showProjectMonthlyUsage && (
				<ProjectMonthUsageModal
					isOpen={showProjectMonthlyUsage}
					close={closeProjectMonthlyUsage}
				/>
			)}
		</>
	);
};

export default ProjectPage;
