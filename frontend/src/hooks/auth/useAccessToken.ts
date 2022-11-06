import useAuth from './useAuth';

const useAccessToken = () => {
	const { access_token: accessToken } = useAuth();
	return accessToken;
};

export default useAccessToken;
