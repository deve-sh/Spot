import { TableContainer, Table, Thead, Tbody, Tr, Th, Td, Tooltip, Icon } from '@chakra-ui/react';
import { MdLink } from 'react-icons/md';

import formatNumber from 'utils/formatNumber';

import Container from 'components/Layout/Container';
import Skeleton from 'components/Layout/GenericSkeleton';
import SectionHeading from 'components/SectionHeading';
import NoneFound from 'components/NoneFound';

import useProjectTopURLs from './useProjectTopURLs';

const ProjectTopURLs = () => {
	const { data } = useProjectTopURLs();

	if (!data)
		return (
			<Container padding="2" paddingY="6">
				<Skeleton />
			</Container>
		);

	return (
		<Container padding="2" paddingY="6">
			<SectionHeading>
				<Icon as={MdLink} height={6} width={6} marginRight="3" /> Top URLs
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
								<Th>URL</Th>
								<Th textAlign="right">Number of Navigations</Th>
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
										<Td textAlign="right">{formatNumber(url.count || 0)}</Td>
									</Tr>
								);
							})}
						</Tbody>
					</Table>
				</TableContainer>
			) : (
				<NoneFound label="No URLs Yet" />
			)}
		</Container>
	);
};

export default ProjectTopURLs;
