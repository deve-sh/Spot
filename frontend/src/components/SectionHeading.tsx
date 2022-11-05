import { Heading } from '@chakra-ui/react';

const SectionHeading = ({ children }: { children: any }) => (
	<Heading color="gray.500" size="md" marginBottom="2" display="flex" alignItems="center">
		{children}
	</Heading>
);

export default SectionHeading;
