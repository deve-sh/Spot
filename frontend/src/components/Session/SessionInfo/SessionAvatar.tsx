import { Avatar } from '@chakra-ui/react';

import useSessionInfo from './useSessionInfo';

const SessionAvatar = () => {
	const { data } = useSessionInfo();

	return data ? (
		<Avatar
			name={data.session.user_name || 'Anonymous User'}
			src={data.session.user_photo}
			size="xl"
		/>
	) : (
		<></>
	);
};

export default SessionAvatar;
