import styled from '@emotion/styled';
import { Box, Flex } from '@chakra-ui/react';

import useFetch from 'hooks/useFetch';
import { getSessionAPIEndpoint } from 'utils/endpoints/session';

import Container from 'components/Layout/Container';
import Skeleton from 'components/Layout/GenericSkeleton';

// Sub-components
import SessionAvatar from './SessionAvatar';
import SessionPrimaryInfo from './SessionPrimaryInfo';
import SessionPlatformInfo from './SessionPlatformInfo';

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

const SessionInfo = ({ projectId, sessionId }: Props) => {
	const { data } = useFetch(getSessionAPIEndpoint({ projectId, sessionId }));

	console.log(data);

	return (
		<Container padding="4" minHeight="30vh">
			{data?.session ? (
				<SessionInfoContainer borderWidth="1px" borderRadius="lg" padding="6">
					<SessionInfoFlex alignItems="center">
						<SessionAvatar />
						<SessionPrimaryInfo />
						<SessionPlatformInfo />
					</SessionInfoFlex>
				</SessionInfoContainer>
			) : (
				<Skeleton />
			)}
		</Container>
	);
};

export default SessionInfo;
