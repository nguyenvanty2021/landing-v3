import HelmetCommon from 'common/components/helmet';
import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import ReactGa from 'react-ga';
import { useRouter } from 'next/router';
export const ROUTES = {
	TOKEN_PRESALE_ROUNDS: '/token-presale-rounds',
	TOKEN_PRESALE_ROUNDS_DETAIL: '/token-presale-rounds/detail',
	MY_PROFILE: '/my-profile',
	MINT_DNFT: '/mint-dnft',
	MINT_KEY: '/mint-key',
	MERGE_NFT: '/merge-nft',
	RESCUE_NFT: '/rescue-nft',
	LANDING: '/landing',
	NFT_DETAIL: '/dnft-detail',
};
const Header = dynamic(
	() => import('./../modules/landing/components/Header/index')
);
const Footer = dynamic(
	() => import('./../modules/landing/components/Footer')
);
const PreFooter = dynamic(
	() => import('./../modules/landing/components/PreFooter')
);
const About = dynamic(() => import('./../modules/landing/components/About'));
const Roadmap = dynamic(
	() => import('./../modules/landing/components/Roadmap')
);
const Statistic = dynamic(
	() => import('./../modules/landing/components/Statistic')
);
export default function LandingPage() {
	const router = useRouter();
	useEffect(() => {
		ReactGa.initialize(process?.env?.NEXT_PUBLIC_GA_TRACKING_CODE || '');
		// to report page view Google Analytics
		ReactGa.pageview(router?.pathname || '');
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<>
			<HelmetCommon
				title='Landing'
				description='Description landing...'
				href={ROUTES.LANDING}
			/>
			<div className='max-w-[100%] scrollbar-width scrollbar-medium overflow-hidden bg-[#0c1e32] '>
				<div className='bg-repeat flex items-center bg-landing flex-col bg-center backgroundSizeMobile desktop:bg-contain'>
					<div className='desktop:max-w-[90rem] mobile:max-w-[100vw]'>
						<Header />
						<main>
							<About />
							<Statistic />
							<Roadmap />
							<PreFooter />
						</main>
					</div>
					<Footer />
				</div>
			</div>
		</>
	);
}
