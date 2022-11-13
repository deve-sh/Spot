import { TableContainer, Table, Thead, Tbody, Tr, Th, Td, Tooltip, Icon } from '@chakra-ui/react';
import { MdLink } from 'react-icons/md';

import formatNumber from 'utils/formatNumber';

import Container from 'components/Layout/Container';
import Skeleton from 'components/Layout/GenericSkeleton';
import SectionHeading from 'components/SectionHeading';

import useProjectTopURLs from './useProjectTopURLs';

const ProjectTopURLs = () => {
	const { data } = useProjectTopURLs();

	if (!data) return <Skeleton />;

	return (
		<Container padding="2" paddingY="6">
			<SectionHeading>
				<Icon as={MdLink} color="blue" height={6} width={6} marginRight="4" /> Top URLs
			</SectionHeading>
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
		</Container>
	);
};

export default ProjectTopURLs;
