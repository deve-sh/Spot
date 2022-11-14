import { Flex, Icon, Text } from '@chakra-ui/react';
import { FaCoffee, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
	return (
		<Flex p="8" color="gray.600" alignItems="center">
			<Text fontSize="md" flex="3">
				Made with curiousity and fun by{' '}
				<a href="https://github.com/deve-sh" target="_blank" rel="noopener noreferrer">
					Devesh Kumar
				</a>
				.
			</Text>
			<Flex justifyContent="flex-end" flex="1" gap="3">
				<a
					href="https://www.linkedin.com/in/dev-esh/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Icon as={FaLinkedin} height={6} width={6} />
				</a>
				<a href="https://github.com/deve-sh/spot" target="_blank" rel="noopener noreferrer">
					<Icon as={FaGithub} height={6} width={6} />
				</a>
			</Flex>
		</Flex>
	);
};

export default Footer;
