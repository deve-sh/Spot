import supabase from './supabase';

export const signInWithGitHub = () => {
	return supabase.auth.signInWithOAuth({
		provider: 'github'
	});
};

export const onAuthStateChanged = () => {
	return supabase.auth.onAuthStateChange(console.log);
};
