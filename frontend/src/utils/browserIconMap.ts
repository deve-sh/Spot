import { FaFirefox, FaChrome, FaEdge, FaSafari } from 'react-icons/fa';
import { GoBrowser } from 'react-icons/go';

const browserIconMap: Record<string, any> = {
	Chrome: FaChrome,
	Firefox: FaFirefox,
	Edge: FaEdge,
	Safari: FaSafari,
	default: GoBrowser
};

export default browserIconMap;
