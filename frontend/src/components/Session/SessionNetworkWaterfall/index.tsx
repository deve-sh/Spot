import { useEffect, useCallback, useRef } from 'react';
import styled from '@emotion/styled';
import { Icon } from '@chakra-ui/react';
import { MdWaterfallChart } from 'react-icons/md';

import waterfall from 'waterfall.draw';
import 'waterfall.draw/styles.min.css';

import Container from 'components/Layout/Container';
import SectionHeading from 'components/SectionHeading';
import useSessionNetworkCalls from './useSessionNetworkCalls';

const WaterfallDiv = styled(Container)`
	.handle {
		display: none;
		pointer-events: none;
	}

	.details-container {
		padding: 1rem;
		min-width: max-content;
	}

	.popup-wrapper {
		.pointer {
			display: none;
		}
	}

	.gantt-container {
		max-height: 75vh;
		overflow-y: auto;
	}
`;

const SessionNetworkWaterfall = () => {
	const { data } = useSessionNetworkCalls();
	const waterfallContainerElement = useRef(null);

	const initializeWaterfall = useCallback(() => {
		if (data?.networkCalls?.length) {
			const networkCallsWaterfallBlocks = [];
			for (let i = 0; i < data.networkCalls.length; i++) {
				const call = data.networkCalls[i];
				networkCallsWaterfallBlocks.push({
					id: call.id,
					url: call.url,
					startedAt: new Date(Number(call.startedAt)),
					endedAt: new Date(Number(call.startedAt) + Number(call.duration))
				});
			}

			if (waterfallContainerElement.current)
				waterfall(waterfallContainerElement.current, networkCallsWaterfallBlocks);
		}
	}, [data]);

	useEffect(() => {
		if (data?.networkCalls?.length) initializeWaterfall();
	}, [data]);

	return (
		<>
			{data ? (
				<>
					<Container>
						<SectionHeading>
							<Icon
								as={MdWaterfallChart}
								color="orange.500"
								height={6}
								width={6}
								marginRight="1"
							/>{' '}
							Network Waterfall
						</SectionHeading>
					</Container>
					<WaterfallDiv
						ref={waterfallContainerElement}
						maxHeight="50vh"
						marginBottom="4"
					/>
				</>
			) : (
				''
			)}
		</>
	);
};

export default SessionNetworkWaterfall;
