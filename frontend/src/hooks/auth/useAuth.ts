const useAuth = () => {
	if (typeof window !== 'undefined') {
		const userAndTokenInfo = JSON.parse(
			localStorage.getItem(`sb-${process.env.NEXT_PUBLIC_SUPABASE_PROJECT_ID}-auth-token`) ||
				'{ "user": null }'
		);
		return userAndTokenInfo;
	}
	return { user: null };
};

export default useAuth;
