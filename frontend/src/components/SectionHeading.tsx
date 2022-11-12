import { Heading } from '@chakra-ui/react';

const SectionHeading = ({ children }: { children: any }) => (
	<Heading color="gray.600" size="md" marginBottom="4" display="flex" alignItems="center">
		{children}
	</Heading>
);

export default SectionHeading;
