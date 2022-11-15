import { Box, Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';

import Container from 'components/Layout/Container';
import DocsNavbar from './Navbar';

const DocsContainer = styled(Container)`
	@media (max-width: 768px) {
		.docs-layout-flex {
			flex-flow: column;
		}
	}
`;

const Layout = ({ children }: { children: React.ReactNode | React.ReactNode[] }) => {
	return (
		<>
			<DocsContainer>
				<Flex className="docs-layout-flex">
					<DocsNavbar />
					<Box padding="4" color="gray.500">
						{children}
					</Box>
				</Flex>
			</DocsContainer>
		</>
	);
};

export default Layout;
