import { useMemo } from 'react';
import { Flex, Icon } from '@chakra-ui/react';
import { GrDocumentPerformance } from 'react-icons/gr';

import SectionHeading from 'components/SectionHeading';
import Container from 'components/Layout/Container';
import Skeleton from 'components/Layout/GenericSkeleton';

import Vital from './Vital';
import useSessionVitals from './useSessionVitals';

const SessionVitals = () => {
	const { data } = useSessionVitals();
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
		<Container paddingBottom="2" paddingTop="8">
			{data ? (
				<>
					<SectionHeading>
						<Icon
							as={GrDocumentPerformance}
							color="gray.500"
							height={5}
							width={5}
							marginRight="2"
						/>{' '}
						Session Vitals
					</SectionHeading>
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

export default SessionVitals;
