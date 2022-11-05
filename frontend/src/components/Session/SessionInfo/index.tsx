import styled from '@emotion/styled';
import { Box, Flex } from '@chakra-ui/react';

import Container from 'components/Layout/Container';
import Skeleton from 'components/Layout/GenericSkeleton';

// Sub-components
import useSessionInfo from './useSessionInfo';
import SessionAvatar from './SessionAvatar';
import SessionPrimaryInfo from './SessionPrimaryInfo';
import SessionPlatformInfo from './SessionPlatformInfo';
import SessionStartedFrom from './SessionStartedFrom';

const SessionInfoContainer = styled(Box)``;

const SessionInfoFlex = styled(Flex)`
	@media only screen and (max-width: 686px) {
		flex-direction: column;
		text-align: center;
	}
`;

const SessionInfo = () => {
	const { data } = useSessionInfo();

	return (
		<Container minHeight="30vh" paddingTop="6">
			{data?.session ? (
				<SessionInfoContainer padding="0">
					<SessionInfoFlex
						padding="4"
						borderWidth="1px"
						borderRadius="lg"
						borderBottomLeftRadius="0"
						borderBottomRightRadius="0"
						borderBottomWidth="0"
						alignItems="center"
					>
						<SessionAvatar />
						<SessionPrimaryInfo />
						<SessionPlatformInfo />
					</SessionInfoFlex>
					<SessionStartedFrom />
				</SessionInfoContainer>
			) : (
				<Skeleton />
			)}
		</Container>
	);
};

export default SessionInfo;
