import { Box, Flex } from '@chakra-ui/react';

import Container from 'components/Layout/Container';
import Skeleton from 'components/Layout/GenericSkeleton';

import useFetch from 'hooks/useFetch';

import { getSessionLogsAPIEndpoint } from 'utils/endpoints/session';

interface Props {
	sessionId: string;
	projectId: string;
	page: number;
}

const SessionLogs = ({ projectId, sessionId, page = 0 }: Props) => {
	const { data, error } = useFetch(
		getSessionLogsAPIEndpoint({ projectId, sessionId, offset: page * 25 })
	);
	return <Container padding="4">{data || error ? <></> : <Skeleton height="50vh" />}</Container>;
};

export default SessionLogs;
