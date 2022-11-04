import { useRouter } from 'next/router';

import SessionInfo from 'src/components/Session/SessionInfo';
import SessionLogs from 'src/components/Session/SessionLogs';

const SessionPage = () => {
	const router = useRouter();
	console.log(router.query);
	const {
		query: { projectId, sessionId }
	} = useRouter();

	return projectId && sessionId ? (
		<>
			<SessionInfo projectId={projectId} sessionId={sessionId} />
			<SessionLogs projectId={projectId} sessionId={sessionId} />
		</>
	) : (
		''
	);
};

export default SessionPage;
