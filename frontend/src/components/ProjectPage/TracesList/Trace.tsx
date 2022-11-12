import Link from 'next/link';
import { useRouter } from 'next/router';
import { Box, Flex, Heading, Text, Tooltip } from '@chakra-ui/react';

import formatNumber from 'utils/formatNumber';

interface Props {
	trace: any;
}

const Trace = (props: Props) => {
	const {
		query: { projectId }
	} = useRouter();

	if (!props.trace) return <></>;

	return (
		<Link href={`/project/${projectId}/trace/${props.trace.id}`} target="_blank">
			<Flex
				padding="4"
				color="gray.500"
				borderBottomColor="gray.200"
				borderBottomWidth="1px"
				alignItems="center"
			>
				<Box flex="3">
					<Tooltip label={props.trace.trace_name}>
						<Heading
							size={{ xl: 'sm', md: 'xs' }}
							color="blackAlpha.800"
							textOverflow="ellipsis"
							whiteSpace="nowrap"
							overflow="hidden"
						>
							{props.trace.trace_name}
						</Heading>
					</Tooltip>
					<Text fontSize="xs" mt="1">
						{formatNumber(props.trace.n_samples)} Samples
					</Text>
				</Box>
				<Flex flex="1" justifyContent="flex-end">
					<Tooltip label="Average Duration Of Trace">
						<Text>{Number(props.trace.avg_duration).toFixed(2)}ms</Text>
					</Tooltip>
				</Flex>
			</Flex>
		</Link>
	);
};

export default Trace;
