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

	return projectId && sessionId ? (
		<Container padding="2">
			<SEO title={`Spot | Session (${sessionId})`} />
			<SessionInfo />
			<SessionVitals />
			<SessionLogs />
			<SessionNetworkWaterfall />
		</Container>
	) : (
		<FullPageSkeleton />
	);
};

export default SessionPage;
