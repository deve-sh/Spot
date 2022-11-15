import { Box, Flex } from '@chakra-ui/react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Container from 'components/Layout/Container';
import DocsNavbar from './Navbar';
import DocsBottomNav from './BottomNav';

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

		pre {
			margin-bottom: 2rem;
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

const Layout = ({ children }: { children: React.ReactNode | React.ReactNode[] }) => (
	<>
		<DocsContainer>
			<Flex className="docs-layout-flex">
				<DocsNavbar />
				<Box className="docs-block" padding="4" color="gray.500">
					<Box>{children}</Box>
					<DocsBottomNav />
				</Box>
			</Flex>
		</DocsContainer>
	</>
);

export default Layout;
