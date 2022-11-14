import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useUser from 'hooks/auth/useUser';

import HomePage from 'components/Homepage';

const Home = () => {
	const router = useRouter();
	const user = useUser();

	useEffect(() => {
		if (user) router.push('/projects');
	}, [user]);

	return <HomePage />;
};

export default Home;
