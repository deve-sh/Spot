import { MouseEvent, useCallback, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { FiUsers } from 'react-icons/fi';
import { Box, Flex, Icon } from '@chakra-ui/react';

import SessionListFragment from './SessionsListFragment';
import Container from 'components/Layout/Container';
import SectionHeading from 'components/SectionHeading';
import SessionsContainer from './SessionsContainer';
import SessionFiltersSelector from './SessionFiltersSelector';

const SessionList = () => {
	const {
		query: { projectId }
	} = useRouter();

	const [selectionFilters, setSelectionFilters] = useState<Record<string, string> | null>(null);
	const [nSessionSessionsPages, setNSessionSessionsPages] = useState(1);
	const [canLoadMore, setCanLoadMore] = useState(true);

	const onLastLogsPageData = useCallback((data: any) => {
		if (!data?.logs?.length || data?.error) return setCanLoadMore(false);
		else return setCanLoadMore(true);
	}, []);

	const sessionsPages = useMemo(() => {
		if (!projectId) return null;

		const pages = [];
		for (let pageIndex = 0; pageIndex < nSessionSessionsPages; pageIndex++)
			pages.push(
				<SessionListFragment
					page={pageIndex}
					key={pageIndex}
					// Last session log container should notify the parent component on receiving data if there's more to be fetched.
					onData={
						pageIndex === nSessionSessionsPages - 1 ? onLastLogsPageData : undefined
					}
				/>
			);
		return pages;
	}, [nSessionSessionsPages, projectId]);

	const applyFilters = (filtersToApply: Record<string, string>) =>
		setSelectionFilters(filtersToApply);
	const clearAllFilters = () => setSelectionFilters(null);

	const loadNextPage = (e: MouseEvent<HTMLLinkElement>) => {
		e.preventDefault();
		if (canLoadMore) {
			setCanLoadMore(false);
			setNSessionSessionsPages((pages) => pages + 1);
		}
	};

	return (
		<>
			<Container padding="2" paddingY="6">
				<Flex alignItems="center" mb="2">
					<Box flex="1">
						<SectionHeading>
							<Icon as={FiUsers} height={6} width={6} marginRight="4" /> Project
							Sessions
						</SectionHeading>
					</Box>
					<Flex flex="1" justifyContent="flex-end">
						<SessionFiltersSelector
							applyFilters={applyFilters}
							clearFilters={clearAllFilters}
						/>
					</Flex>
				</Flex>
				<SessionsContainer showLoadMore={canLoadMore} onClickLoadMore={loadNextPage}>
					{sessionsPages}
				</SessionsContainer>
			</Container>
		</>
	);
};

export default SessionList;
