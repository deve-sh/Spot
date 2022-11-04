import { useCallback } from 'react';
import useSWR from 'swr';
import fetcher from '../utils/fetch';
import useProjectAuth from './useProjectAuth';

const useFetch = (key: string | null | undefined) => {
	const projectAuth = useProjectAuth();

	const fetch = useCallback(
		(key: string): any =>
			fetcher(key, { headers: { authorization: `Key ${projectAuth.apiKey}` } }),
		[key, projectAuth?.apiKey]
	);

	return useSWR(key, fetch, { revalidateOnMount: true, revalidateOnFocus: false });
};

export default useFetch;
