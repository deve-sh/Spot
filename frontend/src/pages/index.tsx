import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useUser from 'hooks/auth/useUser';

const HomePage = () => {
	const router = useRouter();
	const user = useUser();

	useEffect(() => {
		if (user) router.push('/projects');
	}, [user]);

	return <></>;
};

export default HomePage;
