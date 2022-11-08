import Link from 'next/link';
import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import { BsLaptop } from 'react-icons/bs';

// todo: Add Types for Project, Session and other backend reliant fields.
const ProjectCard = ({ project }: { project: any }) => {
	return (
		<Link href={`/project/${project.id}`}>
			<Flex
				borderRadius="lg"
				boxShadow="base"
				_hover={{ boxShadow: 'lg' }}
				minHeight="200px"
				width="325px"
				padding="4"
				flexFlow="column"
				color="gray.400"
			>
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
			</Flex>
		</Link>
	);
};

export default ProjectCard;
