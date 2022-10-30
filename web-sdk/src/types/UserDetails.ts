type UserDetails = {
	name?: string;
	email?: string;
	phone?: string;
	photoURL?: string;
};

export const defaultUserDetails: UserDetails = {
	name: '',
	email: '',
	phone: '',
	photoURL: ''
};

export default UserDetails;
