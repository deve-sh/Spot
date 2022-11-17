import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogContent,
	AlertDialogOverlay,
	Button,
	useToast
} from '@chakra-ui/react';
import { deleteProject } from 'API/projects';

interface Props {
	isOpen: boolean;
	close: () => void;
}

const ProjectDeletionDialog = ({ isOpen, close }: Props) => {
	const router = useRouter();
	const cancelRef = useRef(null);
	const toast = useToast();

	const [isDeleting, setIsDeleting] = useState(false);

	const onConfirmDelete = async () => {
		setIsDeleting(true);
		const { error } = await deleteProject(router.query.projectId as string);
		setIsDeleting(false);

		console.log({ error });

		if (error)
			return toast({
				title: "Project couldn't be deleted.",
				description:
					error.response?.error?.message ||
					error.message ||
					'Please try again in some time.',
				status: 'error',
				isClosable: true
			});

		close();
		router.push('/projects');
	};

	const onClose = isDeleting ? () => null : close;

	return (
		<AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
			<AlertDialogOverlay>
				<AlertDialogContent>
					<AlertDialogHeader fontSize="lg" fontWeight="bold">
						Delete Project
					</AlertDialogHeader>

					<AlertDialogBody>
						Are you sure? You can't undo this action. The deletion is permanent and the
						project cannot be restored. The project would not be deleted if there are
						any pending bills.
					</AlertDialogBody>

					<AlertDialogFooter>
						<Button ref={cancelRef} onClick={onClose} isLoading={isDeleting}>
							Cancel
						</Button>
						<Button
							colorScheme="red"
							onClick={onConfirmDelete}
							isLoading={isDeleting}
							ml={3}
						>
							Delete
						</Button>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialogOverlay>
		</AlertDialog>
	);
};

export default ProjectDeletionDialog;
