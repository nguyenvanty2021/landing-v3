import 'styles/globals.scss';
import 'styles/index.scss';
import type { AppProps } from 'next/app';
import HeadCommon from 'common/components/head';
import { HelmetProvider } from 'react-helmet-async';
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<HeadCommon title='Galactix Zone' />
			<HelmetProvider>
				<Component {...pageProps} />
			</HelmetProvider>
		</>
	);
}

export default MyApp;
