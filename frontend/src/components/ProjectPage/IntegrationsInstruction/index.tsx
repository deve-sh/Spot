import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	Code,
	Box,
	IconButton,
	Icon,
	Text,
	useToast
} from '@chakra-ui/react';
import { MdContentCopy } from 'react-icons/md';

import useProject from 'hooks/api/useProject';
import copyText from 'utils/copyText';

interface Props {
	isOpen: boolean;
	close: () => void;
}

const CopyButton = styled(IconButton)`
	position: absolute;
	top: 50%;
	right: 0.5rem;
	transform: translateY(-50%);
	border-width: 0.0125rem;
`;

const CommonCode = (props: any) => (
	<Code
		{...props}
		as={Box}
		width="100%"
		whiteSpace="nowrap"
		textOverflow="ellipsis"
		overflow="hidden"
		padding="4"
		borderRadius="md"
		position="relative"
	/>
);

const ProjectIntegrationsInstruction = ({ isOpen, close }: Props) => {
	const toast = useToast();
	const { query: { projectId } = {} } = useRouter();
	const { data: { project } = {} } = useProject();

	const copyAPIKey = () =>
		copyText(project.public_api_key, () => toast({ title: 'API Key copied', status: 'info' }));
	const copyProjectId = () =>
		copyText(projectId as string, () => toast({ title: 'Project ID copied', status: 'info' }));

	return project ? (
		<Modal isOpen={isOpen} onClose={close}>
			<ModalOverlay />
			<ModalContent minWidth="50vw">
				<ModalHeader>Integrate Project</ModalHeader>
				<ModalCloseButton />
				<ModalBody display="flex" flexFlow="column" gap="2">
					<Text>Your Project's ID:</Text>
					<CommonCode>
						{projectId}
						<CopyButton
							borderColor="gray.300"
							boxShadow="lg"
							aria-label="Copy"
							icon={<Icon as={MdContentCopy} />}
							onClick={copyProjectId}
						/>
					</CommonCode>
					<Text>Your Project's Public API Key:</Text>
					<CommonCode>
						{project.public_api_key}
						<CopyButton
							borderColor="gray.300"
							boxShadow="lg"
							aria-label="Copy"
							icon={<Icon as={MdContentCopy} />}
							onClick={copyAPIKey}
						/>
					</CommonCode>
					<br />
					<Text>Install The Spot SDK:</Text>
					<CommonCode>npm i spot-web</CommonCode>
					<br />
					<Text>Integrate The Spot SDK in your codebase at initialization:</Text>
					<CommonCode>import Spot from 'spot-web';</CommonCode>
					<CommonCode>
						const spot = new Spot({'<'}Your Project ID{'>'}, {'<'}Your Public API Key
						{'>'});
					</CommonCode>
					<Text>Data will reflect on your dashboard soon.</Text>
				</ModalBody>

				<ModalFooter>
					<Button colorScheme="green" onClick={close}>
						Done
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	) : (
		<div />
	);
};

export default ProjectIntegrationsInstruction;
