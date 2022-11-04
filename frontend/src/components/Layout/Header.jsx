import styled from '@emotion/styled';
import AppBar from '@mui/material/AppBar';
import Container from './Container';

const StyledHeader = styled(AppBar)`
	color: var(--white);
	padding: 1.125rem;
	background: var(--primary);
`;

const Header = () => (
	<StyledHeader>
		<Container>Header</Container>
	</StyledHeader>
);

export default Header;
