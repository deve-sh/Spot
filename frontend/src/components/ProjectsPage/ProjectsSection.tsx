import { Flex, useDisclosure } from '@chakra-ui/react';

import type Project from 'types/Project';

import Skeleton from 'components/Layout/GenericSkeleton';
import CreateProject from 'components/CreateProject';

import useProjects from 'hooks/api/useProjects';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
	const { data, mutate: refetchProjects, error } = useProjects();
	const {
		isOpen: isProjectCreatorOpen,
		onOpen: openProjectCreator,
		onClose: closeProjectCreator
	} = useDisclosure();

	if (!data || error) return <Skeleton />;
	return (
		<>
			<CreateProject
				isOpen={isProjectCreatorOpen}
				onClose={closeProjectCreator}
				onCreate={refetchProjects}
			/>
			<Flex gap="6" flexWrap="wrap" justifyContent="center">
				<ProjectCard isProjectCreatorCard onClick={openProjectCreator} />
				{data.map((project: Project) => (
					<ProjectCard key={project.id} project={project} />
				))}
			</Flex>
		</>
	);
};

export default ProjectsSection;
