import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import SEO from 'components/SEO';
import GlobalStyles from 'components/Styling/Global';
import Header from 'components/Layout/Header';

const App = ({ Component, pageProps }: AppProps) => {
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
