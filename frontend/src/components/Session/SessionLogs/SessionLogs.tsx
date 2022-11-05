import { useEffect } from 'react';
import type { LogType } from 'types/Log';

import Skeleton from 'components/Layout/GenericSkeleton';

import useSessionLogs from './useSessionLogs';
import Log from './Log';

interface Props {
	page: number;
	onData?: (data: any) => any;
}

const SessionLogs = ({ page = 0, onData }: Props) => {
	const { data, error } = useSessionLogs({ offset: page * 25 });

	useEffect(() => {
		if (onData && (data?.message || error)) onData(data || { error });
	}, [onData, error, data]);

	return data?.logs ? (
		data.logs.map((log: LogType) => <Log key={log.id} log={log} />)
	) : (
		<Skeleton height="50vh" />
	);
};

export default SessionLogs;
