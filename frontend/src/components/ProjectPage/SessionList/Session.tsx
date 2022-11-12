import { Avatar, Box, Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import styled from '@emotion/styled';

import SessionPlatformInfo from 'components/Session/SessionInfo/SessionPlatformInfo';

interface Props {
	session: any;
}

const SessionContainer = styled(Flex)`
	@media only screen and (max-width: 576px) {
		flex-flow: column;

		.session-platform-info {
			width: 100%;
			justify-content: flex-start;
		}
	}
`;

const Session = (props: Props) => {
	if (!props.session) return <div />;

	return (
		<Link
			href={`/project/${props.session.project}/session/${props.session.session_id}`}
			target="_blank"
		>
			<SessionContainer
				alignItems="center"
				borderBottomColor="gray.200"
				borderBottomWidth="1px"
				width="100%"
				padding="4"
				marginBottom="0.5"
				gap="3"
				color="gray.600"
			>
				<Flex gap="2" width="100%">
					<Box>
						<Avatar
							src={props.session.user_photo}
							name={props.session.user_name || 'Anonymous User'}
							size="lg"
						/>
					</Box>
					<Flex gap="1" flexDirection="column">
						<Heading size="md" color="blackAlpha.800">
							{props.session.user_name || 'Anonymous User'}
						</Heading>
						<Text fontSize="xs">{props.session.user_email || ''}</Text>
						<Text fontSize="xs" display="flex" gap="1">
							Started:{' '}
							<Text fontWeight="bold" letterSpacing="1">
								{new Date(props.session.started_at).toDateString()}{' '}
								{new Date(props.session.started_at).toTimeString().split('GMT')[0]}
							</Text>
						</Text>
					</Flex>
				</Flex>
				<SessionPlatformInfo session={props.session} iconSize="md" />
			</SessionContainer>
		</Link>
	);
};

export default Session;
