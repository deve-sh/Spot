import { Box, Flex } from '@chakra-ui/react';
import Container from './Container';

import SignInWithGitHub from './SignInWithGitHub';

const Header = () => (
	<Box
		borderBottomColor="gray.200"
		borderBottomWidth="1.125px"
		background="white"
		color="black"
		padding="2"
	>
		<Container display="flex">
			<Box flex="1.33"></Box>
			<Flex flex="1" justifyContent="flex-end">
				<SignInWithGitHub />
			</Flex>
		</Container>
	</Box>
);

export default Header;
