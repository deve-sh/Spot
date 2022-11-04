export const getSessionAPIEndpoint = ({
	projectId,
	sessionId
}: {
	projectId: string;
	sessionId: string;
}) => `${import.meta.env.PUBLIC_API_URL}/session/${projectId}/${sessionId}`;
