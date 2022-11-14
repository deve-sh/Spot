import { useMemo } from 'react';
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	Box,
	Flex,
	Stat,
	StatLabel,
	StatNumber
} from '@chakra-ui/react';
import {
	ResponsiveContainer,
	LineChart,
	CartesianGrid,
	Line,
	Legend,
	Tooltip,
	YAxis,
	XAxis,
	PieChart,
	Pie
} from 'recharts';

import NoneFound from 'components/NoneFound';

import useProject from 'hooks/api/useProject';
import useProjectMonthUsage from './useProjectMonthUsage';

import getLabelForUsageAction from 'utils/getLabelForUsageAction';
import getFillForUsageAction from 'utils/getFillForUsageAction';
import SectionHeading from 'components/SectionHeading';

interface Props {
	isOpen: boolean;
	close: () => void;
}

const ProjectMonthUsageModal = ({ isOpen, close }: Props) => {
	const { data } = useProjectMonthUsage();
	const { data: { project } = {} } = useProject();

	const usagePieChartData = useMemo(() => {
		if (data?.byAction)
			return data.byAction.map((byAction: any) => ({
				name: getLabelForUsageAction(byAction.action),
				value: byAction.n_api_calls,
				fill: getFillForUsageAction(byAction.action)
			}));
		return [];
	}, [data]);

	const usageLineChartData = useMemo(() => {
		if (data?.byDay)
			return data.byDay.map((byDay: any) => ({
				name: byDay.date,
				['No Of API Calls']: byDay.n_api_calls
			}));
		return [];
	}, [data]);

	return data && project ? (
		<Modal isOpen={isOpen} onClose={close}>
			<ModalOverlay />
			<ModalContent minWidth="60vw">
				<ModalHeader>Project Usage This Month</ModalHeader>
				<ModalCloseButton />
				<ModalBody display="flex" flexFlow="column" gap="2" color="gray.600">
					<Flex gap="4">
						<Stat flex="1" borderRadius="md" borderWidth="1px" padding="4">
							<StatLabel>API Calls This Month</StatLabel>
							<StatNumber color="blackAlpha.800">{data.usage.n_api_calls}</StatNumber>
						</Stat>
						<Stat flex="1" borderRadius="md" borderWidth="1px" padding="4">
							<StatLabel>API Calls Limit</StatLabel>
							<StatNumber color="blackAlpha.800">
								{project.n_max_api_calls_per_month}
							</StatNumber>
						</Stat>
					</Flex>
					<Box mt="4" width="100%" padding="4">
						{/* Usage by Action Pie Chart */}
						<SectionHeading>Usage By Action</SectionHeading>
						{usagePieChartData.length ? (
							<ResponsiveContainer width="100%" height={250}>
								<PieChart>
									<Pie
										data={usagePieChartData}
										dataKey="value"
										nameKey="name"
										outerRadius={80}
										innerRadius={60}
										fill="#8884d8"
										label={(entry) => entry.name}
									/>
								</PieChart>
							</ResponsiveContainer>
						) : (
							<NoneFound label="Not enough data yet." />
						)}
					</Box>
					<Box mt="4" width="100%" padding="4">
						{/* Usage by Day Bar Chart */}
						<SectionHeading>Usage By Day</SectionHeading>
						{usageLineChartData.length ? (
							<ResponsiveContainer width="100%" height={250}>
								<LineChart data={usageLineChartData}>
									<CartesianGrid strokeDasharray="3 3" />
									<XAxis dataKey="name" />
									<YAxis />
									<Tooltip />
									<Legend />
									<Line dataKey="No Of API Calls" stroke="#004643" />
								</LineChart>
							</ResponsiveContainer>
						) : (
							<NoneFound label="Not enough data yet." />
						)}
					</Box>
				</ModalBody>

				<ModalFooter>
					<Button colorScheme="green" onClick={close}>
						Close
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	) : (
		<div />
	);
};

export default ProjectMonthUsageModal;
