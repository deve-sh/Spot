import dynamic from 'next/dynamic';
import Link from 'next/link';
import {
	Flex,
	Heading,
	Icon,
	IconButton,
	Skeleton,
	Tooltip,
	useDisclosure
} from '@chakra-ui/react';
import { BsCodeSlash, BsGlobe, BsPencil, BsTrash } from 'react-icons/bs';
import { GoGlobe } from 'react-icons/go';
import { MdArrowBack, MdDataUsage } from 'react-icons/md';

import useProject from 'hooks/api/useProject';
import useProjectUserRole from 'hooks/api/useProjectUserRole';

import Container from 'components/Layout/Container';

const ProjectDeletionDialog = dynamic(() => import('./DeleteProject'), { ssr: false });
const ProjectRenamingDialog = dynamic(() => import('./RenameProject'), { ssr: false });

interface Props {
	openIntegrationInstruction: () => void;
	openProjectMonthlyUsage: () => void;
}

const ProjectHeader = ({ openIntegrationInstruction, openProjectMonthlyUsage }: Props) => {
	const { data: { project } = {} } = useProject();
	const { data: { role } = {} } = useProjectUserRole();

	const {
		isOpen: showProjectDeletionDialog,
		onOpen: openProjectDeletionDialog,
		onClose: closeProjectDeletionDialog
	} = useDisclosure();
	const {
		isOpen: showProjectRenamingDialog,
		onOpen: openProjectRenamingDialog,
		onClose: closeProjectRenamingDialog
	} = useDisclosure();

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
					<Tooltip label="Usage This Month">
						<IconButton
							icon={<Icon as={MdDataUsage} height={6} width={6} />}
							aria-label="Usage This Month"
							variant="ghost"
							onClick={openProjectMonthlyUsage}
						/>
					</Tooltip>
					<Tooltip label="Integrate">
						<IconButton
							icon={<Icon as={BsCodeSlash} height={7} width={7} />}
							aria-label="Integrate"
							variant="ghost"
							onClick={openIntegrationInstruction}
						/>
					</Tooltip>
					{role === 'admin' && (
						<Tooltip label="Rename Project">
							<IconButton
								icon={<Icon as={BsPencil} height={6} width={6} />}
								aria-label="Rename Project"
								variant="ghost"
								onClick={openProjectRenamingDialog}
							/>
						</Tooltip>
					)}
					{role === 'admin' && (
						<Tooltip label="Delete Project">
							<IconButton
								icon={<Icon as={BsTrash} height={6} width={6} />}
								aria-label="Delete Project"
								variant="ghost"
								colorScheme="red"
								onClick={openProjectDeletionDialog}
							/>
						</Tooltip>
					)}
				</Flex>
			</Flex>
			<ProjectDeletionDialog
				isOpen={showProjectDeletionDialog}
				close={closeProjectDeletionDialog}
			/>
			<ProjectRenamingDialog
				isOpen={showProjectRenamingDialog}
				close={closeProjectRenamingDialog}
			/>
		</Container>
	);
};

export default ProjectHeader;
