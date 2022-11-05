import { Skeleton as ChakraSkeleton } from '@chakra-ui/react';

const Skeleton = ({ height, borderRadius }: { height?: any; borderRadius?: string }) => (
	<ChakraSkeleton width="100%" height={height || '30vh'} borderRadius={borderRadius || 'lg'} />
);

export default Skeleton;
