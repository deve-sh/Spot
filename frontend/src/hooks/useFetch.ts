import { useCallback } from 'react';
import useSWR from 'swr';
import fetcher from '../utils/fetch';
import useProjectAuth from './useProjectAuth';

interface UseFetchOptions {
	headers?: Record<string, any>;
	revalidateOnMount?: boolean;
	revalidateOnFocus?: boolean;
	revalidateIfStale?: boolean;
	shouldRetryOnError?: boolean;
	dedupingInterval?: number;
	errorRetryCount?: number;
	fallback?: any;
}

const useFetch = (key: string | null | undefined, options: UseFetchOptions = {}) => {
	const projectAuth = useProjectAuth();

	const fetch = useCallback(
		(key: string): any =>
			fetcher(key, {
				headers: options.headers || { authorization: `Key ${projectAuth.apiKey}` }
			}),
		[key, projectAuth?.apiKey, options]
	);

	return useSWR(key, fetch, {
		revalidateOnMount: options.revalidateOnMount || true,
		revalidateOnFocus: options.revalidateOnFocus || false,
		revalidateIfStale: options.revalidateIfStale || true,
		fallbackData: options.fallback || undefined,
		dedupingInterval: options.dedupingInterval || 2000,
		shouldRetryOnError: options.shouldRetryOnError || false,
		errorRetryCount: options.errorRetryCount || 0
	});
};

export default useFetch;
