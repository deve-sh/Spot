import { Skeleton as ChakraSkeleton } from '@chakra-ui/react';

const Skeleton = ({ height }: { height?: any }) => (
	<ChakraSkeleton width="100%" height={height || '30vh'} borderRadius="lg" />
);

export default Skeleton;
