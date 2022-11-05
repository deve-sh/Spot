import React, { useMemo } from 'react';
import { Stat, StatLabel, StatNumber, Tooltip } from '@chakra-ui/react';

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
};

const vitalExplainer = (name: string) => {
	if (name === 'domComplete')
		return 'Measures the time to fully build the DOM and execute any scripts in it.';
	if (name === 'fcp')
		return "Measures the time from when the page starts loading to when any part of the page's content is rendered on the screen.";
	if (name === 'fid') return 'Measures the time from when a user first interacts with a page';
};

const Vital = (props: VitalProps) => {
	const vitalsExplainingText = useMemo(() => vitalExplainer(props.vitalName), [props.vitalName]);
	const Parent = vitalsExplainingText ? Tooltip : React.Fragment;
	return (
		<Parent label={vitalsExplainingText}>
			<Stat
				minWidth="25%"
				borderRadius="lg"
				borderWidth="1.25px"
				borderColor="gray.200"
				padding="4"
			>
				<StatLabel>{vitalsNameMapper(props.vitalName)}</StatLabel>
				<StatNumber>{vitalsValueMapper(props.vitalName, props.value)}</StatNumber>
			</Stat>
		</Parent>
	);
};

export default Vital;
