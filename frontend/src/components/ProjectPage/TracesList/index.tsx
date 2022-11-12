import { MouseEvent, useCallback, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { Icon } from '@chakra-ui/react';
import { MdWaterfallChart } from 'react-icons/md';

import Container from 'components/Layout/Container';
import SectionHeading from 'components/SectionHeading';
import TracesListFragment from './TracesListFragment';
import TracesContainer from './TracesContainer';

const ProjectTopTracesList = () => {
	const {
		query: { projectId }
	} = useRouter();

	const [nTracesPages, setNTracesPages] = useState(1);
	const [canLoadMore, setCanLoadMore] = useState(true);

	const onLastPageData = useCallback((data: any) => {
		if (!data?.traces?.length || data?.traces?.length < 50 || data?.error)
			return setCanLoadMore(false);
		else return setCanLoadMore(true);
	}, []);

	const tracesPages = useMemo(() => {
		if (!projectId) return null;

		const pages = [];
		for (let pageIndex = 0; pageIndex < nTracesPages; pageIndex++)
			pages.push(
				<TracesListFragment
					page={pageIndex}
					key={pageIndex}
					onData={pageIndex === nTracesPages - 1 ? onLastPageData : undefined}
				/>
			);
		return pages;
	}, [nTracesPages, projectId]);

	const loadNextPage = (e: MouseEvent<HTMLLinkElement>) => {
		e.preventDefault();
		if (canLoadMore) {
			setCanLoadMore(false);
			setNTracesPages((pages) => pages + 1);
		}
	};

	return (
		<>
			<Container padding="2" paddingY="6">
				<SectionHeading>
					<Icon
						as={MdWaterfallChart}
						color="green"
						height={6}
						width={6}
						marginRight="4"
					/>{' '}
					Custom Traces
				</SectionHeading>
				<TracesContainer showLoadMore={canLoadMore} onClickLoadMore={loadNextPage}>
					{tracesPages}
				</TracesContainer>
			</Container>
		</>
	);
};

export default ProjectTopTracesList;
