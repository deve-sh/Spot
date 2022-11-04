import React from 'react';

import useFetch from '../../hooks/useFetch';
import { getSessionAPIEndpoint } from '../../utils/endpoints/session';

const SessionLogs = ({ projectId, sessionId }) => {
	console.log(getSessionAPIEndpoint({ projectId, sessionId }));
	const { data, error } = useFetch(getSessionAPIEndpoint({ projectId, sessionId }));

	console.log({ data, error });

	return <></>;
};

export default SessionLogs;
