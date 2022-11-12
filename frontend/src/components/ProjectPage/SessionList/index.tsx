import { MouseEvent, useCallback, useMemo, useState } from 'react';
import { useRouter } from 'next/router';

import SessionListFragment from './SessionsListFragment';
import Container from 'components/Layout/Container';
import SectionHeading from 'components/SectionHeading';
import SessionsContainer from './SessionsContainer';

import { FiUsers } from 'react-icons/fi';
import { Icon } from '@chakra-ui/react';

const SessionList = () => {
	const {
		query: { projectId }
	} = useRouter();

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

	const loadNextPage = (e: MouseEvent<HTMLLinkElement>) => {
		e.preventDefault();
		if (canLoadMore) {
			setCanLoadMore(false);
			setNSessionSessionsPages((pages) => pages + 1);
		}
	};

	return (
		<>
			<Container paddingY="6">
				<SectionHeading>
					<Icon as={FiUsers} height={6} width={6} marginRight="4" /> Project Sessions
				</SectionHeading>
				<SessionsContainer showLoadMore={canLoadMore} onClickLoadMore={loadNextPage}>
					{sessionsPages}
				</SessionsContainer>
			</Container>
		</>
	);
};

export default SessionList;
