import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogContent,
	AlertDialogOverlay,
	Button,
	useToast,
	Input
} from '@chakra-ui/react';
import useProject from 'hooks/api/useProject';
import { renameProject } from 'API/projects';

interface Props {
	isOpen: boolean;
	close: () => void;
}

const ProjectRenamingDialog = ({ isOpen, close }: Props) => {
	const router = useRouter();
	const cancelRef = useRef(null);
	const toast = useToast();

	const { data, mutate: refetchProjectInfo } = useProject();

	const [isUpdating, setIsUpdating] = useState(false);
	const [projectName, setProjectName] = useState(data?.project?.project_name || '');

	const onConfirmRename = async () => {
		if (projectName === data?.project?.project_name || !projectName) return;

		setIsUpdating(true);
		const { error } = await renameProject(router.query.projectId as string, projectName);
		setIsUpdating(false);

		if (error)
			return toast({
				title: "Project couldn't be renamed.",
				description: error.message || 'Please try again in some time.',
				status: 'error',
				isClosable: true
			});

		refetchProjectInfo();
		close();
	};

	const onClose = isUpdating ? () => null : close;
	const handleNameInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.persist();
		setProjectName(e.target.value);
	};

	useEffect(() => {
		if (data?.project?.project_name) setProjectName(data.project.project_name);
	}, [data]);

	return (
		<AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
			<AlertDialogOverlay>
				<AlertDialogContent>
					<AlertDialogHeader fontSize="lg" fontWeight="bold">
						Rename Project
					</AlertDialogHeader>

					<AlertDialogBody>
						Enter A New Name for the project:
						<Input
							value={projectName || ''}
							onChange={handleNameInputChange}
							minLength={6}
							maxLength={100}
							mt="4"
							isDisabled={isUpdating}
							placeholder="Can't be Empty"
						/>
					</AlertDialogBody>

					<AlertDialogFooter>
						<Button ref={cancelRef} onClick={onClose} isLoading={isUpdating}>
							Cancel
						</Button>
						<Button
							colorScheme="green"
							onClick={onConfirmRename}
							isLoading={isUpdating}
							ml={3}
						>
							Rename
						</Button>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialogOverlay>
		</AlertDialog>
	);
};

export default ProjectRenamingDialog;
