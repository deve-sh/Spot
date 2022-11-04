import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';
import Container from './Container';

const StyledHeader = styled(Box)`
	padding: 1rem;
	border-bottom: 0.1rem solid var(--grey);
	color: var(--primary);
	background: var(--white);
`;

const Header = () => (
	<StyledHeader>
		<Container>Header</Container>
	</StyledHeader>
);

export default Header;
