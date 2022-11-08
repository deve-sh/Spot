import { FaGithub } from 'react-icons/fa';
import { Button, Icon } from '@chakra-ui/react';
import { signInWithGitHub } from 'API/auth';

const SignInWithGitHub = () => (
	<Button
		borderRadius="md"
		variant="outline"
		borderColor="#171515"
		color="#171515"
		borderWidth="2px"
		title="Sign In With GitHub"
		alignItems="center"
		letterSpacing="wide"
		leftIcon={<Icon as={FaGithub} height={6} width={6} color="#171515" marginRight="1" />}
		onClick={signInWithGitHub}
	>
		Sign In
	</Button>
);

export default SignInWithGitHub;
