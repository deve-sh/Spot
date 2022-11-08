import { Image } from '@chakra-ui/react';
import Container from 'components/Layout/Container';
import ProjectsTable from 'components/ProjectsPage/ProjectsSection';

const UserProjects = () => {
	return (
		<Container padding="4" display="flex" flexFlow="column" alignItems="center">
			<Image
				src="/images/projects.svg"
				marginY="8"
				maxWidth="300"
				alt="Your Projects"
				title="Your Projects"
			/>
			<ProjectsTable />
		</Container>
	);
};

export default UserProjects;
