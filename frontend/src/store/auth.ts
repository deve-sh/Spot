import create from 'zustand';

const useAuthStore = create<{
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

export default useAuthStore;
