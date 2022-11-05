import { useEffect, useCallback } from 'react';
import styled from '@emotion/styled';
import { Icon } from '@chakra-ui/react';

import Head from 'next/head';
import Script from 'next/script';

import { MdWaterfallChart } from 'react-icons/md';

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

	const initializeGantt = useCallback(() => {
		if (data?.networkCalls?.length) {
			const callsGanttBlocks = [];
			for (let i = 0; i < data.networkCalls.length; i++) {
				const call = data.networkCalls[i];
				callsGanttBlocks.push({
					id: call.id,
					name: call.url,
					// The times will be magnified here.
					// The gantt library uses days as the basis for charting, we are dealing with milliseconds, hence the multiplication.
					start: new Date(Number(call.startedAt) * 5000),
					end: new Date(Number(call.startedAt) * 5000 + Number(call.duration) * 864000),
					progress: 100,
					duration: call.duration,
					startedAt: new Date(Number(call.startedAt))
				});
			}

			if ((window as any).Gantt) {
				new (window as any).Gantt('#gantt-ref', callsGanttBlocks, {
					view_mode: 'Quarter Day',
					header_height: 0,
					custom_popup_html: function (networkCall: any) {
						return `
                          <div class="details-container">
                            <h5>${networkCall.name}</h5>
                            <p>Started at ${networkCall.startedAt.toDateString()} ${networkCall.startedAt.toTimeString()}</p>
                            <p>Duration: ${networkCall.duration}ms</p>
                          </div>
                        `;
					}
				});

				const ganttRef = document.getElementById('gantt-ref');
				const ganttContainer = ganttRef?.getElementsByClassName('gantt')[0];
				const ganttGridElement = ganttContainer?.getElementsByClassName('grid')[0];

				if (ganttContainer && ganttGridElement) {
					ganttContainer.setAttribute(
						'height',
						ganttGridElement.getBoundingClientRect().height.toString()
					);
				}
			}
		}
	}, [data]);

	useEffect(() => {
		if (data?.networkCalls?.length) initializeGantt();
	}, [data]);

	return (
		<>
			<Head>
				<link rel="stylesheet" href="/scripts/frappe-gantt/frappe-gantt.min.css" />
			</Head>
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
							Network Calls Waterfall
						</SectionHeading>
					</Container>
					<WaterfallDiv
						id="gantt-ref"
						maxHeight="50vh"
						borderWidth="0.0125rem"
						marginBottom="4"
					/>
				</>
			) : (
				''
			)}
			<Script
				src="/scripts/frappe-gantt/frappe-gantt.min.js"
				strategy="lazyOnload"
				onLoad={initializeGantt}
			/>
		</>
	);
};

export default SessionNetworkWaterfall;
