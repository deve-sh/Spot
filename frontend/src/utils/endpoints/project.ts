export const getProjectEndpoint = (projectId: string) =>
	`${process.env.NEXT_PUBLIC_API_URL}/project/${projectId}`;

export const getProjectCreationEndpoint = () => `${process.env.NEXT_PUBLIC_API_URL}/project/`;

export const getListProjectSessionsEndpoint = ({
	projectId,
	offset,
	filters
}: {
	projectId: string;
	offset: number;
	filters?: Record<string, string> | null;
}) =>
	`${process.env.NEXT_PUBLIC_API_URL}/project/${projectId}/sessions?offset=${offset}${
		filters ? '&filters=' + JSON.stringify(filters) : ''
	}`;

export const getListTopTracesForProjectEndpoint = ({
	projectId,
	offset
}: {
	projectId: string;
	offset: number;
}) => `${process.env.NEXT_PUBLIC_API_URL}/project/${projectId}/top-traces?offset=${offset}`;

export const getOverallVitalsForProjectEndpoint = ({ projectId }: { projectId: string }) =>
	`${process.env.NEXT_PUBLIC_API_URL}/project/${projectId}/vitals`;

export const getTopURLsForProjectEndpoint = ({ projectId }: { projectId: string }) =>
	`${process.env.NEXT_PUBLIC_API_URL}/project/${projectId}/top-nav-urls`;

export const getTopSessionDomainsForProjectEndpoint = ({ projectId }: { projectId: string }) =>
	`${process.env.NEXT_PUBLIC_API_URL}/project/${projectId}/top-session-domains`;
