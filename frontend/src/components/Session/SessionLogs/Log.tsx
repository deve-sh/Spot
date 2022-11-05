import { useState } from 'react';
import styled from '@emotion/styled';
import { Badge, Box, Flex, Tooltip } from '@chakra-ui/react';

import type { LogSeverity, LogType } from 'types/Log';

interface LogProps {
	log: LogType;
}

const getLogSeverityColorScheme = (severity: LogSeverity) => {
	if (severity === 'info') return undefined;
	if (severity === 'error') return 'red';
	if (severity === 'warn') return 'orange';
};

const LogRow = styled(Flex)`
	-ms-overflow-style: none;
	scrollbar-width: none;
	&::-webkit-scrollbar {
		display: none;
	}
`;

const LogSeverity = styled(Box)`
	min-width: 7%;
	@media only screen and (max-width: 768px) {
		min-width: 10%;
	}
	@media only screen and (max-width: 576px) {
		min-width: 15%;
	}
`;

const Log = (props: LogProps) => {
	const [expanded, setExpanded] = useState(false);

	return (
		<Tooltip label={new Date(props.log.log_time).toString()}>
			<LogRow
				gap="4"
				borderBottom="1px"
				paddingY="3"
				borderColor="gray.200"
				whiteSpace={expanded ? 'normal' : 'nowrap'}
				maxWidth="100%"
				overflowX="scroll"
				cursor="pointer"
				onClick={() => setExpanded((exp) => !exp)}
				color="gray.600"
			>
				<LogSeverity paddingLeft="4">
					<Badge colorScheme={getLogSeverityColorScheme(props.log.severity)}>
						{props.log.severity}
					</Badge>
				</LogSeverity>
				<Flex gap="3">
					{props.log.fragments.map((fragment, index) => (
						<Box key={index} title={fragment.value} minWidth="fit-content">
							{fragment.value}
						</Box>
					))}
				</Flex>
			</LogRow>
		</Tooltip>
	);
};

export default Log;
