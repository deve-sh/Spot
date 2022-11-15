import { useRouter } from 'next/router';
import { useMemo } from 'react';
import Link from 'next/link';
import { Icon, Flex } from '@chakra-ui/react';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';

import docsNavList from '../../../docs/navlist';

const DocsBottomNav = () => {
	const { query: { docPage } = {} } = useRouter();

	const currentPageIndex = useMemo(() => {
		if (docPage) return docsNavList.findIndex((navItem) => navItem.url === `/${docPage}`);
		return -1;
	}, [docPage]);

	const nextPage = useMemo(() => {
		if (currentPageIndex !== -1) return docsNavList[currentPageIndex + 1];
	}, [currentPageIndex]);

	const previousPage = useMemo(() => {
		if (currentPageIndex !== -1) return docsNavList[currentPageIndex - 1];
	}, [currentPageIndex]);

	return (
		<Flex width="100%">
			<Flex flex="1" justifyContent="flex-start" alignItems="center">
				{!!previousPage && (
					<>
						<Icon as={BsArrowLeft} height={6} width={6} mr="2" />
						<Link href={`/docs/${previousPage.url}`}>{previousPage.title}</Link>
					</>
				)}
			</Flex>
			<Flex flex="1" justifyContent="flex-end" alignItems="center">
				{!!nextPage && (
					<>
						<Link href={`/docs/${nextPage.url}`}>{nextPage.title}</Link>
						<Icon as={BsArrowRight} height={6} width={6} ml="2" />
					</>
				)}
			</Flex>
		</Flex>
	);
};

export default DocsBottomNav;
