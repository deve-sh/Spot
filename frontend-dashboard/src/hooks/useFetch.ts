import useSWR from 'swr';
import fetcher from '../utils/fetch';

const useFetch = (key: string | null | undefined) => useSWR(key, fetcher);

export default useFetch;
