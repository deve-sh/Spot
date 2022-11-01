const getCookie = (cookieName: string) => {
	const name = cookieName + '=';
	const decodedCookie = decodeURIComponent(document.cookie);
	const cookieFragments = decodedCookie.split(';');
	for (let i = 0; i < cookieFragments.length; i++) {
		let cookieFragment = cookieFragments[i];
		while (cookieFragment.charAt(0) == ' ') cookieFragment = cookieFragment.substring(1);
		if (cookieFragment.indexOf(name) == 0)
			return cookieFragment.substring(name.length, cookieFragment.length);
	}
	return '';
};

const getActiveSessionId = () => {
	const cookieName = 'spot_session_id';
	if (document.cookie.includes(cookieName)) return getCookie(cookieName);
	return null;
};

export default getActiveSessionId;
