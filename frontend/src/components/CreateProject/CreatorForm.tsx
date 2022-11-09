import { ChangeEvent, useState } from 'react';
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	Image,
	Input,
	Text,
	Flex
} from '@chakra-ui/react';

interface Props {
	isOpen: boolean;
	onClose: () => void;
	isCreating: boolean;
	triggerProjectCreation: any;
}

const CreatorForm = ({ isOpen, onClose, triggerProjectCreation, isCreating }: Props) => {
	const [projectInputs, setProjectInputs] = useState({
		projectName: ''
	});

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		event.persist();
		setProjectInputs((inputs) => ({
			...inputs,
			[event.target.name]: event.target.value
		}));
	};

	return (
		<Modal isOpen={isOpen} onClose={!isCreating ? onClose : () => undefined}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Create A Project</ModalHeader>
				<ModalCloseButton />
				<ModalBody
					color="black.700"
					alignItems="center"
					flexFlow="column"
					gap="4"
					display="flex"
				>
					<Image src="/images/add_project.svg" maxWidth="150px" />
					<Flex gap="1" display="flex" textAlign="left" width="100%" flexFlow="column">
						<Text paddingLeft="2" fontWeight="black">
							Project Name
						</Text>
						<Input
							name="projectName"
							value={projectInputs.projectName}
							onChange={onChange}
							placeholder="ACME Project"
							isDisabled={isCreating}
						/>
					</Flex>
				</ModalBody>

				<ModalFooter>
					<Button
						isLoading={isCreating}
						variant="ghost"
						colorScheme="red"
						mr={3}
						onClick={onClose}
					>
						Close
					</Button>
					<Button
						onClick={() => triggerProjectCreation(projectInputs)}
						colorScheme="green"
						isLoading={isCreating}
					>
						Create Project
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default CreatorForm;
