export interface ProjectAndSessionProp {
	projectId: string;
	sessionId: string;
}

export const getSessionAPIEndpoint = ({ projectId, sessionId }: ProjectAndSessionProp) =>
	`${process.env.NEXT_PUBLIC_API_URL}/session/${projectId}/${sessionId}`;

export interface LogsProps extends ProjectAndSessionProp {
	offset: number;
}

export const getSessionLogsAPIEndpoint = ({ projectId, sessionId, offset = 0 }: LogsProps) =>
	`${process.env.NEXT_PUBLIC_API_URL}/session/${projectId}/${sessionId}/logs?offset=${offset}&limit=25`;

export const getSessionNetworkCallsEndpoint = ({ projectId, sessionId }: ProjectAndSessionProp) =>
	`${process.env.NEXT_PUBLIC_API_URL}/session/${projectId}/${sessionId}/network-calls`;
