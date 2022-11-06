import type { AuthChangeEvent, Session } from '@supabase/supabase-js';
import supabase from './supabase';

export const signInWithGitHub = () => {
	return supabase.auth.signInWithOAuth({
		provider: 'github'
	});
};

export const onAuthStateChanged = (
	callback: (event: AuthChangeEvent, session: Session | null) => void
) => {
	return supabase.auth.onAuthStateChange(callback);
};
