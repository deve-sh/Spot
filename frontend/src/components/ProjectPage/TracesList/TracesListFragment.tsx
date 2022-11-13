import { useEffect } from 'react';
import { Box } from '@chakra-ui/react';

import Skeleton from 'components/Layout/GenericSkeleton';
import NoneFound from 'components/NoneFound';

import useProjectTraces from './useProjectTopTraces';
import Trace from './Trace';

interface Props {
	page: number;
	onData?: (data: any) => any;
}

const TraceListFragment = ({ page = 0, onData }: Props) => {
	const { data, error } = useProjectTraces({ offset: page * 50 });

	useEffect(() => {
		if (onData && (data?.message || error)) onData(data || { error });
	}, [onData, error, data]);

	if (!data?.traces.length)
		return (
			<Box padding="4" textAlign="center">
				<NoneFound label="No Traces Found" />
			</Box>
		);
	return data?.traces ? (
		data.traces.map((trace: any) => <Trace trace={trace} key={trace.id} />)
	) : (
		<Skeleton height="50vh" borderRadius="none" />
	);
};

export default TraceListFragment;
