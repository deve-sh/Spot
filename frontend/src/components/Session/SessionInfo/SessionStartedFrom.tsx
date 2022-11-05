import { Box, Text } from '@chakra-ui/react';
import useSessionInfo from './useSessionInfo';

const SessionStartedFrom = () => {
	const { data } = useSessionInfo();

	return data ? (
		<Box
			bgColor="green.100"
			padding="4"
			borderBottomLeftRadius="lg"
			borderBottomRightRadius="lg"
			textAlign="center"
		>
			<Text color="green.500">
				Started from
				<Text color="green.700" display="inline-block" marginLeft="1">
					<a
						href={data.session.started_from_url}
						target="_blank"
						rel="noopener noreferrer"
					>
						{data.session.started_from_url}
					</a>
				</Text>
			</Text>
		</Box>
	) : (
		<></>
	);
};

export default SessionStartedFrom;
