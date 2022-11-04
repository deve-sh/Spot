import { Image as ResponsiveImage } from '@chakra-ui/react';

const Image = ({ src, ...props }: { src: string; [key: string]: any }) => (
	<ResponsiveImage src={src} maxWidth="100%" maxHeight="100%" {...props} />
);

export default Image;
