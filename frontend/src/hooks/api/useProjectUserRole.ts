import { useRouter } from 'next/router';
import type { User } from '@supabase/supabase-js';

import supabase from 'API/supabase';

import useFetch from 'hooks/useFetch';
import useUser from 'hooks/auth/useUser';

const fetcherGenerator = (user: User, projectId: string) => async () => {
	const { data, error } = await supabase
		.from('projects_members')
		.select('role')
		.eq('member', user.id)
		.eq('project', projectId)
		.single();
	if (error) throw error;
	return data;
};

const useProjectUserRole = () => {
	const { query: { projectId } = {} } = useRouter();
	const user = useUser();
	return useFetch(user?.id && projectId ? `${projectId as string}-user-role` : null, {
		fetcher: fetcherGenerator(user, projectId as string)
	});
};

export default useProjectUserRole;
