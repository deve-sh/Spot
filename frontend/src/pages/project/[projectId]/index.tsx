import useProject from 'hooks/api/useProject';
import { useRouter } from 'next/router';
import { useDisclosure } from '@chakra-ui/react';

import SEO from 'components/SEO';
import dynamic from 'next/dynamic';

const ProjectHeader = dynamic(() => import('components/ProjectPage/ProjectHeader'), { ssr: false });
const ProjectVitals = dynamic(() => import('components/ProjectPage/ProjectVitals'), { ssr: false });
const ProjectTopTracesList = dynamic(() => import('components/ProjectPage/TracesList'), {
	ssr: false
});
const SessionList = dynamic(() => import('components/ProjectPage/SessionList'), { ssr: false });
const ProjectIntegrationsInstruction = dynamic(
	() => import('components/ProjectPage/IntegrationsInstruction'),
	{ ssr: false }
);
const ProjectTopURLs = dynamic(() => import('components/ProjectPage/TopURLs'), { ssr: false });
const ProjectTopSessionDomains = dynamic(() => import('components/ProjectPage/TopSessionDomains'), {
	ssr: false
});
const ProjectMonthUsageModal = dynamic(() => import('components/ProjectPage/ProjectMonthUsage'), {
	ssr: false
});

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
