import { useState, useMemo } from 'react';
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

	const logsPages = useMemo(() => {
		const pages = [];
		for (let pageIndex = 0; pageIndex < nSessionLogsPages; pageIndex++)
			pages.push(<SessionLogs page={pageIndex} key={pageIndex} />);
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
