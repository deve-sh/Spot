import { useState, useMemo } from 'react';
import { useRouter } from 'next/router';

import SessionInfo from 'components/Session/SessionInfo';
import SessionLogs from 'components/Session/SessionLogs';

import FullPageSkeleton from 'components/Layout/FullPageSkeleton';

const SessionPage = () => {
	const {
		query: { projectId, sessionId }
	} = useRouter();
	const [nSessionLogsPages, setnSessionLogsPages] = useState(1);

	const logsPages = useMemo(() => {
		const pages = [];
		for (let pageIndex = 0; pageIndex < nSessionLogsPages; pageIndex++) {
			pages.push(
				<SessionLogs
					projectId={projectId as string}
					sessionId={sessionId as string}
					page={pageIndex}
				/>
			);
		}
		return pages;
	}, [nSessionLogsPages, sessionId, projectId]);

	return projectId && sessionId ? (
		<>
			<SessionInfo projectId={projectId as string} sessionId={sessionId as string} />
			{logsPages}
		</>
	) : (
		<FullPageSkeleton />
	);
};

export default SessionPage;
