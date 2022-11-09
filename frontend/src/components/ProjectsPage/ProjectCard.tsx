import Link from 'next/link';
import styled from '@emotion/styled';
import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import { BsLaptop, BsPlus } from 'react-icons/bs';

import Project from 'types/Project';

interface ProjectCardProps {
	project?: Project;
	isProjectCreatorCard?: boolean;
	onClick?: (e: React.MouseEvent<HTMLLinkElement>) => any;
}

const ProjectCardWrapper = ({
	children,
	className,
	color
}: {
	children?: any;
	className?: string;
	color?: string;
}) => (
	<Flex
		borderRadius="lg"
		borderWidth="1px"
		borderColor="gray.100"
		boxShadow="base"
		_hover={{ boxShadow: 'lg' }}
		minHeight="200px"
		className={className}
		width="325px"
		padding="4"
		flexFlow="column"
		color={color || 'gray.400'}
	>
		{children}
	</Flex>
);

const ProjectCreatorCardWrapper = styled(ProjectCardWrapper)`
	align-items: center;
	justify-content: center;
	gap: 1rem;
`;

const ProjectCard = ({ project, isProjectCreatorCard, onClick }: ProjectCardProps) => {
	if (isProjectCreatorCard)
		return (
			<Link href="#" onClick={onClick}>
				<ProjectCreatorCardWrapper color="blue.700">
					<Icon as={BsPlus} height={10} width={10} />
					<Text fontSize="xl" fontWeight="500">
						Add Project
					</Text>
				</ProjectCreatorCardWrapper>
			</Link>
		);

	if (!project) return <></>;

	return (
		<Link href={`/project/${project.id}`} onClick={onClick}>
			<ProjectCardWrapper>
				<Box flex="5" justifySelf="flex-start">
					<Text fontSize="xl" fontWeight="bold" textTransform="capitalize" color="black">
						{project.project_name}
					</Text>
					<Text
						fontSize="sm"
						color="gray.500"
						whiteSpace="nowrap"
						overflow="hidden"
						title={project.id}
					>
						{project.id}
					</Text>
				</Box>
				<Flex
					flex="2"
					justifySelf="flex-end"
					alignItems="flex-end"
					justifyContent="flex-start"
					gap="4"
				>
					<Icon as={BsLaptop} height={5} width={5} title="Web Project" />
					<Text fontSize="xs">{new Date(project.created_at).toDateString()}</Text>
				</Flex>
			</ProjectCardWrapper>
		</Link>
	);
};

export default ProjectCard;
