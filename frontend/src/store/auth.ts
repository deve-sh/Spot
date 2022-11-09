import create from 'zustand/vanilla';
import createHook from 'zustand';

export const authStore = create<{
	user: any;
	setUser: (user: any) => any;
	token: string | null;
	setToken: (token: string | null) => any;
}>((set) => ({
	user: null,
	token: null,
	setUser: (user: any) => set({ user }),
	setToken: (token: string | null) => set({ token })
}));

const useAuthStore = createHook(authStore);

export default useAuthStore;
