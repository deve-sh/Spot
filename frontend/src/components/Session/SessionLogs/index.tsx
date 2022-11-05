import Container from 'components/Layout/Container';
import Skeleton from 'components/Layout/GenericSkeleton';

import useSessionLogs from './useSessionLogs';

interface Props {
	page: number;
}

const SessionLogs = ({ page = 0 }: Props) => {
	const { data, error } = useSessionLogs({ offset: page * 25 });
	return <Container padding="4">{data || error ? <></> : <Skeleton height="50vh" />}</Container>;
};

export default SessionLogs;
