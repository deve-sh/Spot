import useAuthStore from 'store/auth';

const useAuth = () => {
	// Try getting from Zustand store
	const user = useAuthStore((state) => state.user);
	const access_token = useAuthStore((state) => state.token);

	if (user && access_token) return { user, access_token };

	const isServer = typeof window === 'undefined';
	if (!isServer) {
		// Auth info has not been set yet.
		// Fallback to local storage where supabase persists its data.
		const userAndTokenInfo = JSON.parse(
			localStorage.getItem(`sb-${process.env.NEXT_PUBLIC_SUPABASE_PROJECT_ID}-auth-token`) ||
				'{ "user": null, "access_token": null }'
		);
		return userAndTokenInfo;
	}
	return { user: null };
};

export default useAuth;
