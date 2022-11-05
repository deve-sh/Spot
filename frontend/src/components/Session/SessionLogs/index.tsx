import { Icon } from '@chakra-ui/react';
import { GrTextAlignLeft as LogIcon } from 'react-icons/gr';

import type { LogType } from 'types/Log';

import Container from 'components/Layout/Container';
import Skeleton from 'components/Layout/GenericSkeleton';
import SectionHeading from 'components/SectionHeading';

import useSessionLogs from './useSessionLogs';
import Log from './Log';
import LogsContainer from './LogsContainer';

interface Props {
	page: number;
}

const SessionLogs = ({ page = 0 }: Props) => {
	const { data } = useSessionLogs({ offset: page * 25 });
	return (
		<Container paddingY="6">
			<SectionHeading>
				<Icon as={LogIcon} color="green.500" height={5} width={5} marginRight="2" /> Session
				Logs
			</SectionHeading>
			{data?.logs ? (
				<LogsContainer>
					{data.logs.map((log: LogType) => (
						<Log key={log.id} log={log} />
					))}
				</LogsContainer>
			) : (
				<Skeleton height="50vh" />
			)}
		</Container>
	);
};

export default SessionLogs;
