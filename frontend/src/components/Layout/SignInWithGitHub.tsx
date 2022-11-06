import { FaGithub } from 'react-icons/fa';
import { Button, Icon } from '@chakra-ui/react';
import { signInWithGitHub } from 'API/auth';

const SignInWithGitHub = () => (
	<Button
		backgroundColor="blackAlpha.800"
		borderRadius="md"
		_focus={{ backgroundColor: 'blackAlpha.800' }}
		_hover={{ backgroundColor: 'blackAlpha.800' }}
		color="white"
		paddingY="6"
		alignItems="center"
		letterSpacing="wide"
		boxShadow="md"
		leftIcon={<Icon as={FaGithub} height={6} width={6} color="white" marginRight="1" />}
		onClick={signInWithGitHub}
	>
		Sign In
	</Button>
);

export default SignInWithGitHub;
