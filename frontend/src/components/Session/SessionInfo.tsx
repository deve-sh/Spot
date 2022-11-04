import styled from '@emotion/styled';
import { Avatar, Box, Flex, Heading, Icon, Text } from '@chakra-ui/react';

import useFetch from 'hooks/useFetch';
import { getSessionAPIEndpoint } from 'utils/endpoints/session';

import Container from 'components/Layout/Container';
import Skeleton from 'components/Layout/GenericSkeleton';
import browserIconMap from 'utils/browserIconMap';
import osIconMap from 'utils/osIconMap';
import deviceIconMap from 'utils/deviceIconMap';

interface Props {
	sessionId: string;
	projectId: string;
}

const SessionInfoContainer = styled(Box)``;

const SessionInfoFlex = styled(Flex)`
	@media only screen and (max-width: 686px) {
		flex-direction: column;
		text-align: center;
	}
`;

const InfoIcon = ({ as }: { as: any }) => <Icon as={as} w={10} h={10} color="gray.600" />;

const SessionInfo = ({ projectId, sessionId }: Props) => {
	const { data, error } = useFetch(getSessionAPIEndpoint({ projectId, sessionId }));

	console.log(data);

	return (
		<Container padding="4" minHeight="30vh">
			{data?.session ? (
				<SessionInfoContainer borderWidth="1px" borderRadius="lg" padding="6">
					<SessionInfoFlex alignItems="center">
						<Avatar
							name={data?.session.user_name || 'Anonymous User'}
							src={data?.session.user_photo}
							size="xl"
						/>
						<Box padding="4">
							<Heading size="xl">
								{data?.session.user_name || 'Anonymous User'}
							</Heading>
							{!!data?.session.user_email && (
								<Text fontSize="md" color="gray.600" marginTop="1">
									{data?.session.user_email}
								</Text>
							)}
							{!!data?.session.user_phone && (
								<Text fontSize="md" color="gray.600" marginTop="1">
									{data?.session.user_phone}
								</Text>
							)}
							<Text
								marginTop="1"
								display="flex"
								gap="1"
								fontSize="xs"
								color="gray.500"
							>
								Session Started At:{' '}
								{new Date(data?.session.started_at).toDateString()}{' '}
								{new Date(data?.session.started_at).toTimeString()}
							</Text>
						</Box>
						<Flex justifyContent="flex-end" flex="1" gap="3">
							<InfoIcon
								as={
									browserIconMap[data.session.platform_info.browser] ||
									browserIconMap.default
								}
							/>
							{!!osIconMap[data.session.platform_info.platform] && (
								<InfoIcon as={osIconMap[data.session.platform_info.platform]} />
							)}
							<InfoIcon
								as={
									deviceIconMap[
										data.session.platform_info.isMobile ? 'mobile' : 'desktop'
									]
								}
							/>
						</Flex>
					</SessionInfoFlex>
				</SessionInfoContainer>
			) : (
				<Skeleton />
			)}
		</Container>
	);
};

export default SessionInfo;
