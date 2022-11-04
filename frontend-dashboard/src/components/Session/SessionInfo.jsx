import React from 'react';

import useFetch from '../../hooks/useFetch';
import { getSessionAPIEndpoint } from '../../utils/endpoints/session';

const SessionInfo = ({ projectId, sessionId }) => {
	const { data, error } = useFetch(getSessionAPIEndpoint({ projectId, sessionId }));
	return <></>;
};

export default SessionInfo;
