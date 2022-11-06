import { useEffect } from 'react';
import { onAuthStateChanged, signInWithGitHub } from 'API/auth';

const useAuthListener = () => {
	useEffect(() => {
		onAuthStateChanged();
	}, []);
};

export default useAuthListener;
