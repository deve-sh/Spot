import { Box, Heading, Text } from '@chakra-ui/react';
import useSessionInfo from './useSessionInfo';

const SessionPrimaryInfo = () => {
	const { data } = useSessionInfo();

	return data ? (
		<Box padding="4" color="gray.600">
			<Heading size="xl" color="gray.700">
				{data?.session.user_name || 'Anonymous User'}
			</Heading>
			{!!data?.session.user_email && (
				<Text fontSize="md" marginTop="1">
					{data?.session.user_email}
				</Text>
			)}
			{!!data?.session.user_phone && (
				<Text fontSize="md" marginTop="1">
					{data?.session.user_phone}
				</Text>
			)}
			<Text marginTop="1" display="flex" gap="1" fontSize="xs" color="gray.500">
				Session Started At:{' '}
				<Text fontWeight="bold" letterSpacing="1">
					{new Date(data?.session.started_at).toDateString()}{' '}
					{new Date(data?.session.started_at).toTimeString()}
				</Text>
			</Text>
		</Box>
	) : (
		<></>
	);
};

export default SessionPrimaryInfo;
