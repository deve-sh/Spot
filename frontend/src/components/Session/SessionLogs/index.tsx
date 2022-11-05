import { useCallback, useMemo, useState, type MouseEvent } from 'react';
import { useRouter } from 'next/router';
import { Icon } from '@chakra-ui/react';
import { GrTextAlignLeft as LogIcon } from 'react-icons/gr';

import Container from 'components/Layout/Container';
import SectionHeading from 'components/SectionHeading';

import SessionLogs from './SessionLogs';
import LogsContainer from './LogsContainer';

const SessionLogsContainer = () => {
	const {
		query: { projectId, sessionId }
	} = useRouter();

	const [nSessionLogsPages, setNSessionLogsPages] = useState(1);
	const [canLoadMoreLogs, setCanLoadMoreLogs] = useState(true);

	const onLastLogsPageData = useCallback((data: any) => {
		if (!data?.logs?.length || data?.error) return setCanLoadMoreLogs(false);
		else return setCanLoadMoreLogs(true);
	}, []);

	const logsPages = useMemo(() => {
		if (!sessionId || !projectId) return null;

		const pages = [];
		for (let pageIndex = 0; pageIndex < nSessionLogsPages; pageIndex++)
			pages.push(
				<SessionLogs
					page={pageIndex}
					key={pageIndex}
					// Last session log container should notify the parent component on receiving data if there's more to be fetched.
					onData={pageIndex === nSessionLogsPages - 1 ? onLastLogsPageData : undefined}
				/>
			);
		return pages;
	}, [nSessionLogsPages, sessionId, projectId]);

	const loadNextPage = (e: MouseEvent<HTMLLinkElement>) => {
		e.preventDefault();
		if (canLoadMoreLogs) {
			setCanLoadMoreLogs(false);
			setNSessionLogsPages((pages) => pages + 1);
		}
	};

	return (
		<>
			<Container paddingY="6">
				<SectionHeading>
					<Icon as={LogIcon} color="green.500" height={5} width={5} marginRight="2" />{' '}
					Session Logs
				</SectionHeading>
				<LogsContainer showLoadMore={canLoadMoreLogs} onClickLoadMore={loadNextPage}>
					{logsPages}
				</LogsContainer>
			</Container>
		</>
	);
};

export default SessionLogsContainer;
