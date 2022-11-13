import { Box, Icon, Text } from '@chakra-ui/react';
import { MdList } from 'react-icons/md';

const NoneFound = ({ label }: { label: string }) => (
	<Box textAlign="center" color="gray.600">
		<Icon as={MdList} height={12} width={12} />
		<Text>
			<>{label}</>
		</Text>
	</Box>
);

export default NoneFound;
