import type { User } from '@supabase/supabase-js';

import supabase from 'API/supabase';
import useUser from 'hooks/auth/useUser';
import useFetch from 'hooks/useFetch';

import Project from 'types/Project';

const fetcherGenerator = (user: User) => async () => {
	const { data, error } = await supabase
		.from('projects')
		.select('*, projects_members(role, added_at)')
		.eq('projects_members.member', user.id)
		.order('updated_at', { ascending: false })
		.limit(100);
	if (error) throw error;
	return data as Project[];
};

const useProjects = () => {
	const user = useUser();
	return useFetch(user?.id ? 'user-projects' : null, { fetcher: fetcherGenerator(user) });
};

export default useProjects;
