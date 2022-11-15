import { useMemo } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Box, Flex, Icon } from '@chakra-ui/react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { MdArrowRightAlt, MdOutlineArrowLeft } from 'react-icons/md';

import Container from 'components/Layout/Container';
import DocsNavbar from './Navbar';
import docsNavList from '../../../docs/navlist';

const MarkdownStyling = css`
	.docs-block {
		line-height: 2;

		p {
			margin: 0.75rem 0;
		}

		h1 {
			font-size: 1.75rem;
			color: var(--chakra-colors-blackAlpha-800);
			font-weight: 700;
			line-height: 1.2;
		}

		h2 {
			font-size: 1.5rem;
			color: var(--chakra-colors-blackAlpha-800);
			font-weight: 700;
			line-height: 1.2;
		}

		h3 {
			font-size: 1.25rem;
			color: var(--chakra-colors-blackAlpha-800);
			font-weight: 700;
			line-height: 1.2;
		}

		ul {
			margin-left: var(--chakra-space-4);
		}
	}
`;

const DocsContainer = styled(Container)`
	${MarkdownStyling}

	@media (max-width: 768px) {
		.docs-layout-flex {
			flex-flow: column;
		}
	}
`;

const Layout = ({ children }: { children: React.ReactNode | React.ReactNode[] }) => {
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
		<>
			<DocsContainer>
				<Flex className="docs-layout-flex">
					<DocsNavbar />
					<Box className="docs-block" padding="4" color="gray.500">
						<Box>{children}</Box>
						<Flex width="100%">
							<Flex flex="1" justifyContent="flex-end" alignItems="center">
								{!!previousPage && (
									<>
										<Icon as={MdOutlineArrowLeft} height={6} width={6} mr="2" />
										<Link href={previousPage.url}>{previousPage.title}</Link>
									</>
								)}
							</Flex>
							<Flex flex="1" justifyContent="flex-end" alignItems="center">
								{!!nextPage && (
									<>
										<Link href={nextPage.url}>{nextPage.title}</Link>
										<Icon as={MdArrowRightAlt} height={6} width={6} ml="2" />
									</>
								)}
							</Flex>
						</Flex>
					</Box>
				</Flex>
			</DocsContainer>
		</>
	);
};

export default Layout;
