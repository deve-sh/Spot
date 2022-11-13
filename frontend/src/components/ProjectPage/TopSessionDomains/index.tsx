import { TableContainer, Table, Thead, Tbody, Tr, Th, Td, Tooltip, Icon } from '@chakra-ui/react';
import { MdTag } from 'react-icons/md';

import formatNumber from 'utils/formatNumber';

import Container from 'components/Layout/Container';
import Skeleton from 'components/Layout/GenericSkeleton';
import SectionHeading from 'components/SectionHeading';
import NoneFound from 'components/NoneFound';

import useProjectTopSessionDomains from './useProjectTopSessionDomains';

const ProjectTopSessionDomains = () => {
	const { data } = useProjectTopSessionDomains();

	if (!data)
		return (
			<Container padding="2" paddingY="6">
				<Skeleton />
			</Container>
		);

	return (
		<Container padding="2" paddingY="6">
			<SectionHeading>
				<Icon as={MdTag} height={6} width={6} marginRight="3" /> Top Session Domains
			</SectionHeading>
			{data.urls.length ? (
				<TableContainer
					borderWidth="1px"
					borderColor="gray.200"
					borderRadius="md"
					paddingBottom="1"
				>
					<Table>
						<Thead>
							<Tr>
								<Th>Domain</Th>
								<Th textAlign="right">Number of Sessions</Th>
							</Tr>
						</Thead>
						<Tbody>
							{data.urls.map((url: any) => {
								const formattedURL = url.url.replace(/"/g, '');
								return (
									<Tr key={formattedURL}>
										<Td
											whiteSpace="nowrap"
											textOverflow="ellipsis"
											overflow="hidden"
										>
											<Tooltip label={formattedURL}>
												<a
													href={formattedURL}
													target="_blank"
													rel="noopener noreferrer"
												>
													{formattedURL}
												</a>
											</Tooltip>
										</Td>
										<Td textAlign="right">
											{formatNumber(url.n_sessions || 0)}
										</Td>
									</Tr>
								);
							})}
						</Tbody>
					</Table>
				</TableContainer>
			) : (
				<NoneFound label="No Sessions Yet" />
			)}
		</Container>
	);
};

export default ProjectTopSessionDomains;
