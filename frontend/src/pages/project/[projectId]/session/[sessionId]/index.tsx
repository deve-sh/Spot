import { useState, useMemo, useCallback } from 'react';
import { useRouter } from 'next/router';

import SessionInfo from 'components/Session/SessionInfo';
import SessionVitals from 'components/Session/SessionVitals';
import SessionLogs from 'components/Session/SessionLogs';
import SessionNetworkWaterfall from 'components/Session/SessionNetworkWaterfall';

import Container from 'components/Layout/Container';
import FullPageSkeleton from 'components/Layout/FullPageSkeleton';
import SEO from 'components/SEO';

const SessionPage = () => {
	const {
		query: { projectId, sessionId }
	} = useRouter();

	const [nSessionLogsPages, setnSessionLogsPages] = useState(1);
	const [canLoadMoreLogs, setCanLoadMoreLogs] = useState(true);

	const onLastLogsPageData = useCallback((data: any) => {
		if (!data?.logs?.length || data?.error) return setCanLoadMoreLogs(false);
	}, []);
	const logsPages = useMemo(() => {
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

	return projectId && sessionId ? (
		<Container padding="2">
			<SEO title={`Spot | Session (${sessionId})`} />
			<SessionInfo />
			<SessionVitals />
			{logsPages}
			<SessionNetworkWaterfall />
		</Container>
	) : (
		<FullPageSkeleton />
	);
};

export default SessionPage;
