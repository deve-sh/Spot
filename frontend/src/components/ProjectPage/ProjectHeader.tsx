import { useRouter } from 'next/router';
import { Flex, Heading, Icon, IconButton, Skeleton, Tooltip } from '@chakra-ui/react';
import { BsCodeSlash } from 'react-icons/bs';
import { GoGlobe } from 'react-icons/go';

import useProject from 'hooks/api/useProject';
import Container from 'components/Layout/Container';

interface Props {
	openIntegrationInstruction: () => void;
}

const ProjectHeader = ({ openIntegrationInstruction }: Props) => {
	const {
		query: { projectId }
	} = useRouter();
	const { data: { project } = {} } = useProject(projectId as string);

	if (!project) return <Skeleton />;
	return (
		<Container>
			<Flex marginY="4" alignItems="center">
				<Heading
					size="lg"
					textTransform="capitalize"
					whiteSpace="nowrap"
					textOverflow="ellipsis"
					overflow="hidden"
				>
					{project.project_name}
				</Heading>
				<Flex justifyContent="flex-end" flex="1">
					<Tooltip label="Web Project">
						<Flex marginRight="2" alignItems="center">
							<Icon as={GoGlobe} height={7} width={7} />
						</Flex>
					</Tooltip>
					<Tooltip label="Integrate">
						<IconButton
							icon={<Icon as={BsCodeSlash} height={6} width={6} />}
							aria-label="Integrate"
							variant="ghost"
							onClick={openIntegrationInstruction}
						/>
					</Tooltip>
				</Flex>
			</Flex>
		</Container>
	);
};

export default ProjectHeader;
