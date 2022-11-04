import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import GlobalStyles from 'components/Styling/Global';
import Header from 'components/Layout/Header';

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<ChakraProvider>
			<GlobalStyles />
			<Header />
			<Component {...pageProps} />
		</ChakraProvider>
	);
};

export default App;
