import { useEffect } from 'react';
import { onAuthStateChanged } from 'API/auth';
import useAuthStore from 'store/auth';

const useAuthListener = () => {
	const { setUser, setToken } = useAuthStore();

	useEffect(() => {
		const {
			data: { subscription }
		} = onAuthStateChanged((event, session) => {
			if (event === 'SIGNED_OUT') {
				setUser(null);
				setToken(null);
				return;
			}

			if (event === 'SIGNED_IN') {
				setUser(session?.user);
				setToken(session?.access_token || null);
			}
		});

		return subscription.unsubscribe;
	}, []);
};

export default useAuthListener;
