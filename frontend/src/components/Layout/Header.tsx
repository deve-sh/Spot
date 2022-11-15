import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Box, Flex } from '@chakra-ui/react';

import Container from './Container';
import Logo from './Logo';

import useUser from 'hooks/auth/useUser';

const UserOptions = dynamic(() => import('./UserOptions'), { ssr: false });
const SignInWithGitHub = dynamic(() => import('./SignInWithGitHub'), { ssr: false });

const Header = () => {
	const user = useUser();

	return (
		<Box
			borderBottomColor="gray.200"
			borderBottomWidth="1.125px"
			background="white"
			color="black"
			padding="3"
		>
			<Container display="flex" alignItems="center">
				<Box flex="0.33">
					<Link href={user ? '/projects' : '/'}>
						<Logo />
					</Link>
				</Box>
				<Flex flex="1" justifyContent="flex-end" alignItems="center" gap="4">
					<Link href="/docs">Docs</Link>
					{!user ? <SignInWithGitHub /> : <UserOptions />}
				</Flex>
			</Container>
		</Box>
	);
};

export default Header;
