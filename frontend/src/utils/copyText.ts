const copyText = async (text: string, callback?: () => any) => {
	try {
		if (navigator.clipboard) {
			await navigator.clipboard.writeText(text);
			if (typeof callback === 'function') callback();
		}
	} catch {}
};

export default copyText;
