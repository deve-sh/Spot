import { useMemo } from 'react';
import { Flex } from '@chakra-ui/react';

import Container from 'components/Layout/Container';
import Skeleton from 'components/Layout/GenericSkeleton';
import Vital from 'components/Vital';

import useProjectVitals from './useProjectVitals';

const ProjectVitals = () => {
	const { data } = useProjectVitals();

	const vitals = useMemo(() => {
		if (!data?.vitals) return null;
		let vitalKeys = Object.keys(data.vitals);
		const vitalsFragments = [];
		for (let i = 0; i < vitalKeys.length; i++) {
			const vitalName = vitalKeys[i];
			vitalsFragments.push(
				<Vital key={vitalName} vitalName={vitalName} value={data.vitals[vitalName]} />
			);
		}
		return vitalsFragments;
	}, [data?.vitals]);

	return (
		<Container paddingBottom="2">
			{data ? (
				<>
					<Flex flexWrap="wrap" color="gray.600" gap="6">
						{vitals}
					</Flex>
				</>
			) : (
				<Skeleton />
			)}
		</Container>
	);
};

export default ProjectVitals;
