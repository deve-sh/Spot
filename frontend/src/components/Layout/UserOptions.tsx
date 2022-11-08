import { Avatar, Flex, Icon, IconButton } from '@chakra-ui/react';
import { MdLogout } from 'react-icons/md';

import { signOut } from 'API/auth';
import useUser from 'hooks/auth/useUser';

const UserOptions = () => {
	const user = useUser();

	if (!user) return <div />;

	return (
		<Flex gap="1" alignItems="center" paddingX="2">
			<Avatar
				title={user.user_metadata?.full_name}
				width="10"
				height="10"
				src={user.user_metadata?.avatar_url}
				name={user.user_metadata?.full_name}
			/>
			<IconButton
				aria-label="Logout Button"
				title="Logout"
				size="md"
				bg="transparent"
				icon={<Icon as={MdLogout} size="sm" />}
				onClick={signOut}
			/>
		</Flex>
	);
};

export default UserOptions;
