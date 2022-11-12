import React, { useMemo } from 'react';
import { Stat, StatLabel, StatNumber, Tooltip } from '@chakra-ui/react';
import styled from '@emotion/styled';

import formatNumber from 'utils/formatNumber';

interface VitalProps {
	vitalName: string;
	value: number;
}

const vitalsNameMapper = (name: string) => {
	if (name === 'domComplete') return 'domComplete';
	if (name === 'domContentLoadedEventEnd') return 'domContentLoadedEventEnd';
	if (name === 'fcp') return 'First Contentful Paint';
	if (name === 'fp') return 'First Paint';
	if (name === 'fid') return 'First Input Delay';
	if (name === 'loadEventEnd') return 'Load Event Complete';
	if (name === 'domInteractive') return 'domInteractive';
	if (name === 'transferSize') return 'Transfer Size';
	if (name === 'averageCallDuration') return 'Average Request Duration';
	if (name === 'nRequests') return 'Number of API Calls';
};

const vitalsValueMapper = (name: string, value: number) => {
	if (name === 'domComplete') return Number(value / 1000).toFixed(2) + 's';
	if (name === 'domContentLoadedEventEnd') return Number(value / 1000).toFixed(2) + 's';
	if (name === 'domInteractive') return Number(value / 1000).toFixed(2) + 's';
	if (name === 'fcp') return Number(value / 1000).toFixed(2) + 's';
	if (name === 'fid') return Number(value / 1000).toFixed(2) + 's';
	if (name === 'fp') return Number(value / 1000).toFixed(2) + 's';
	if (name === 'loadEventEnd') return Number(value / 1000).toFixed(2) + 's';
	if (name === 'transferSize') return Number(value / 1000).toFixed(2) + ' MB';
	if (name === 'averageCallDuration') return Number(value).toFixed(2) + 'ms';
	return formatNumber(value);
};

const vitalExplainer = (name: string) => {
	if (name === 'domComplete')
		return 'Measures the time to fully build the DOM and execute any scripts in it.';
	if (name === 'fcp')
		return "Measures the time from when the page starts loading to when any part of the page's content is rendered on the screen.";
	if (name === 'fid') return 'Measures the time from when a user first interacts with a page';
};

const VitalStat = styled(Stat)`
	min-width: 25%;
	@media only screen and (max-width: 768px) {
		min-width: 46%;
	}
`;

const Vital = (props: VitalProps) => {
	const vitalsExplainingText = useMemo(() => vitalExplainer(props.vitalName), [props.vitalName]);
	const Parent = vitalsExplainingText ? Tooltip : React.Fragment;
	return (
		<Parent label={vitalsExplainingText}>
			<VitalStat
				minWidth="25%"
				borderRadius="lg"
				borderWidth="1.25px"
				borderColor="gray.200"
				padding="4"
			>
				<StatLabel>{vitalsNameMapper(props.vitalName)}</StatLabel>
				<StatNumber color="blackAlpha.800">
					{vitalsValueMapper(props.vitalName, props.value)}
				</StatNumber>
			</VitalStat>
		</Parent>
	);
};

export default Vital;
