import { QueryClient, QueryClientProvider } from 'react-query';
import 'styles/globals.scss';
import 'styles/index.scss';
import type { AppProps } from 'next/app';
import HeadCommon from 'common/components/head';
import { HelmetProvider } from 'react-helmet-async';
import BigNumber from 'bignumber.js';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const queryClient = new QueryClient();
BigNumber.config({
	ROUNDING_MODE: BigNumber.ROUND_DOWN,
	EXPONENTIAL_AT: [-50, 50],
});

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<HeadCommon title='Galactix Zone' />
			<QueryClientProvider client={queryClient}>
				<HelmetProvider>
					<Component {...pageProps} />
				</HelmetProvider>
			</QueryClientProvider>
		</>
	);
}

export default MyApp;
