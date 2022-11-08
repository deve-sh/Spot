import { Flex } from '@chakra-ui/react';

import Skeleton from 'components/Layout/GenericSkeleton';
import useProjects from 'hooks/api/useProjects';

import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
	const { data, error } = useProjects();

	if (!data || error) return <Skeleton />;
	return (
		<Flex gap="6" flexWrap="wrap" justifyContent="center">
			<ProjectCard isProjectCreatorCard />
			{data.map((project: any) => (
				<ProjectCard project={project} />
			))}
		</Flex>
	);
};

export default ProjectsSection;
