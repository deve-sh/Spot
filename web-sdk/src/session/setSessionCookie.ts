const setSessionCookie = (sessionId: string) => (document.cookie = `spot_session_id=${sessionId};`);

export default setSessionCookie;
