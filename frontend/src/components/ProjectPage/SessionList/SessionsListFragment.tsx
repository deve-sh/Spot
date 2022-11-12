import { useEffect } from 'react';

import Skeleton from 'components/Layout/GenericSkeleton';
import useProjectSessions from './useProjectSessions';
import Session from './Session';

interface Props {
	page: number;
	onData?: (data: any) => any;
}

const SessionListFragment = ({ page = 0, onData }: Props) => {
	const { data, error } = useProjectSessions({ offset: page * 25 });

	useEffect(() => {
		if (onData && (data?.message || error)) onData(data || { error });
	}, [onData, error, data]);

	return data?.sessions ? (
		data.sessions.map((session: any) => <Session session={session} key={session.session_id} />)
	) : (
		<Skeleton height="50vh" borderRadius="none" />
	);
};

export default SessionListFragment;
