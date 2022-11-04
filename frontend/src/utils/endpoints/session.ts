interface ProjectAndSessionProp {
	projectId: string;
	sessionId: string;
}

export const getSessionAPIEndpoint = ({ projectId, sessionId }: ProjectAndSessionProp) =>
	`${process.env.PUBLIC_API_URL}/session/${projectId}/${sessionId}`;

interface LogsProps extends ProjectAndSessionProp {
	offset: number;
}

export const getSessionLogsAPIEndpoint = ({ projectId, sessionId, offset }: LogsProps) =>
	`${process.env.PUBLIC_API_URL}/session/${projectId}/${sessionId}/logs?offset=${offset}&limit=25`;
