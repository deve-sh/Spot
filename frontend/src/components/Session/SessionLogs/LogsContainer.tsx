import { Box } from '@chakra-ui/react';

const LogsContainer = ({ children }: { children: any }) => (
	<Box
		maxHeight="75vh"
		borderWidth="1px"
		borderRadius="lg"
		borderColor="gray.200"
		overflowY="scroll"
	>
		{children}
	</Box>
);

export default LogsContainer;
