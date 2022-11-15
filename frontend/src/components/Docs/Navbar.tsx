import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';

import docsNavList from '../../../docs/navlist';

const StyledNav = styled.nav`
	padding: 1rem;
	border-right: 0.05rem solid var(--chakra-colors-gray-200);
	min-height: 100vh;
	display: flex;
	flex-flow: column;

	@media (max-width: 768px) {
		height: fit-content;
		min-height: fit-content;
		border-right: none;
		border-bottom: 0.05rem solid var(--chakra-colors-gray-200);
		max-height: 15vh;
		overflow-y: auto;
	}
`;

const NavbarLink = styled(Link)`
	color: var(--chakra-colors-gray-700);
	padding: 0.75rem 0.5rem;
	border-radius: 0.25rem;
	transition: 1s;
	min-width: 9.5rem;

	&.active {
		background: var(--chakra-colors-gray-100);
	}
`;

const DocsNavbar = () => {
	const {
		query: { docPage }
	} = useRouter();
	return (
		<StyledNav>
			{docsNavList.map((navItem) => (
				<NavbarLink
					href={navItem.url}
					title={navItem.title}
					className={`/${docPage}` === navItem.url ? 'active' : ''}
				>
					{navItem.title}
				</NavbarLink>
			))}
		</StyledNav>
	);
};

export default DocsNavbar;
