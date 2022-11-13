import { useEffect } from 'react';
import { Box } from '@chakra-ui/react';

import Skeleton from 'components/Layout/GenericSkeleton';
import NoneFound from 'components/NoneFound';

import useProjectSessions from './useProjectSessions';
import Session from './Session';

interface Props {
	page: number;
	onData?: (data: any) => any;
	filters?: Record<string, any> | null;
}

const SessionListFragment = ({ page = 0, onData, filters }: Props) => {
	const { data, error } = useProjectSessions({ offset: page * 25, filters });

	useEffect(() => {
		if (onData && (data?.message || error)) onData(data || { error });
	}, [onData, error, data]);

	if (!data?.sessions.length)
		return (
			<Box padding="4" textAlign="center">
				<NoneFound label="No Sessions Found" />
			</Box>
		);
	return data?.sessions ? (
		data.sessions.map((session: any) => <Session session={session} key={session.session_id} />)
	) : (
		<Skeleton height="50vh" borderRadius="none" />
	);
};

export default SessionListFragment;
