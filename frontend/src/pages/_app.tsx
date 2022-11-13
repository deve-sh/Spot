import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { ChakraProvider } from '@chakra-ui/react';

import SEO from 'components/SEO';

import useAuthListener from 'hooks/auth/useAuthListener';

const Header = dynamic(() => import('components/Layout/Header'), { ssr: false });
const GlobalStyles = dynamic(() => import('components/Styling/Global'), { ssr: false });

const App = ({ Component, pageProps }: AppProps) => {
	useAuthListener();

	return (
		<ChakraProvider>
			<SEO
				title="Spot | Complete Frontend Observability and Monitoring Tool"
				description="Complete Frontend Observability Tool"
			/>
			<GlobalStyles />
			<Header />
			<Component {...pageProps} />
		</ChakraProvider>
	);
};

export default App;
