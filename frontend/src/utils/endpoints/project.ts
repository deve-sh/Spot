export const getProjectEndpoint = (projectId: string) =>
	`${process.env.NEXT_PUBLIC_API_URL}/project/${projectId}`;

export const getProjectCreationEndpoint = () => `${process.env.NEXT_PUBLIC_API_URL}/project/`;

export const getListProjectSessionsEndpoint = ({
	projectId,
	offset
}: {
	projectId: string;
	offset: number;
}) => `${process.env.NEXT_PUBLIC_API_URL}/project/${projectId}/sessions?offset=${offset}`;
