import { useMemo, useEffect } from 'react';
import { Flex } from '@chakra-ui/react';

import Container from 'components/Layout/Container';
import Skeleton from 'components/Layout/GenericSkeleton';
import Vital from 'components/Vital';

import useProjectVitals from './useProjectVitals';

interface Props {
	openIntegrationInstruction: () => void;
}

const ProjectVitals = (props: Props) => {
	const { data, isValidating } = useProjectVitals();

	const vitals = useMemo(() => {
		if (!data?.vitals) return null;
		let vitalKeys = Object.keys(data.vitals);
		const vitalsFragments = [];
		for (let i = 0; i < vitalKeys.length; i++) {
			const vitalName = vitalKeys[i];
			vitalsFragments.push(
				<Vital
					key={vitalName}
					vitalName={vitalName}
					value={data.vitals[vitalName]}
					comparatorValue={data.tillLastWeek?.[vitalName]}
					comparatorLabel={'Till 7 Days ago'}
				/>
			);
		}
		return vitalsFragments;
	}, [data?.vitals]);

	useEffect(() => {
		if (data && !Object.keys(data.vitals || {}).length && !isValidating)
			props.openIntegrationInstruction();
	}, [data?.vitals, isValidating]);

	if (!data) return <Skeleton />;
	return (
		<Container paddingBottom="2">
			<Flex flexWrap="wrap" color="gray.600" gap="6">
				{vitals}
			</Flex>
		</Container>
	);
};

export default ProjectVitals;
