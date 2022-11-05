import { Stat, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/react';

interface VitalProps {
	vitalName: string;
	value: number;
}

const vitalsNameMapper = (name: string) => {
	if (name === 'domComplete') return 'domComplete';
	if (name === 'domContentLoadedEventEnd') return 'domContentLoadedEventEnd';
	if (name === 'fcp') return 'First Contentful Paint';
	if (name === 'loadEventEnd') return 'Load Event Complete';
	if (name === 'domInteractive') return 'domInteractive';
	if (name === 'transferSize') return 'Transfer Size';
};

const vitalsValueMapper = (name: string, value: number) => {
	if (name === 'domComplete') return Number(value / 1000).toFixed(2) + 's';
	if (name === 'domContentLoadedEventEnd') return Number(value / 1000).toFixed(2) + 's';
	if (name === 'domInteractive') return Number(value / 1000).toFixed(2) + 's';
	if (name === 'fcp') return Number(value / 1000).toFixed(2) + 's';
	if (name === 'loadEventEnd') return Number(value / 1000).toFixed(2) + 's';
	if (name === 'transferSize') return Number(value / 1000).toFixed(2) + ' MB';
};

const Vital = (props: VitalProps) => (
	<Stat minWidth="25%" borderRadius="lg" borderWidth="1.25px" borderColor="gray.200" padding="4">
		<StatLabel>{vitalsNameMapper(props.vitalName)}</StatLabel>
		<StatNumber>{vitalsValueMapper(props.vitalName, props.value)}</StatNumber>
	</Stat>
);

export default Vital;
