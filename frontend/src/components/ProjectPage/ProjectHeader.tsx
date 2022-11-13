import Link from 'next/link';
import { useRouter } from 'next/router';
import { Flex, Heading, Icon, IconButton, Skeleton, Tooltip } from '@chakra-ui/react';
import { BsCodeSlash } from 'react-icons/bs';
import { GoGlobe } from 'react-icons/go';
import { MdArrowBack } from 'react-icons/md';

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

	if (!project)
		return (
			<Container padding="2">
				<Skeleton />
			</Container>
		);
	return (
		<Container padding="2">
			<Flex marginY="4" alignItems="center">
				<Link href="/projects">
					<IconButton
						aria-label="Go back to Projects"
						colorScheme="whiteAlpha"
						padding="0"
						mr="3"
						icon={<Icon height={5} width={5} as={MdArrowBack} />}
						color="gray.500"
					/>
				</Link>
				<Heading
					size={{ xl: 'lg', md: 'md' }}
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
