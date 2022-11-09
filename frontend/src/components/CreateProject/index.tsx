import { useState } from 'react';
import { useToast } from '@chakra-ui/react';

import { createProject } from 'API/projects';
import CreatorForm from './CreatorForm';

interface Props {
	isOpen: boolean;
	onClose: () => void;
	onCreate: () => void; // To send the parent component a signal that a project has been created, and hence to refresh the page.
}

const CreateProject = ({ isOpen, onClose, onCreate }: Props) => {
	const toast = useToast();

	const [isCreating, setIsCreating] = useState(false);

	const triggerProjectCreation = async (projectInputs: any) => {
		setIsCreating(true);
		const { response, error } = await createProject({ name: projectInputs.projectName });
		setIsCreating(false);
		if (error)
			return toast({
				title: error.response?.message || error.message,
				status: 'error',
				duration: 5000,
				isClosable: true
			});
		if (response) {
			onCreate();
			onClose();
			return toast({
				title: 'Project Created Successfully',
				description: 'It will reflect in your projects dashboard.',
				status: 'success',
				duration: 5000,
				isClosable: true
			});
		}
	};

	return (
		<CreatorForm
			isOpen={isOpen}
			onClose={onClose}
			triggerProjectCreation={triggerProjectCreation}
			isCreating={isCreating}
		/>
	);
};

export default CreateProject;
