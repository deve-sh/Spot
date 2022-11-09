import fetcher from 'utils/fetch';

import { getProjectCreationEndpoint } from 'utils/endpoints/project';
import { authStore } from 'store/auth';

export const createProject = async (projectInputs: any) => {
	try {
		const token = authStore.getState().token;
		const response = await fetcher(getProjectCreationEndpoint(), {
			body: JSON.stringify(projectInputs),
			method: 'POST',
			headers: { authorization: token ? `Bearer ${token}` : '' }
		});
		return { response };
	} catch (error: any) {
		return { response: null, error };
	}
};
