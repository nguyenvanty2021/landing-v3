import LazyLoadCommon from 'common/components/lazyLoad';
import Image from 'next/image';
import React from 'react';
import { useMediaQuery } from 'react-responsive'
import { BREAK_POINT } from 'common/constants';
interface Timeline {
	imgSrc: string;
	imgStyle?: any;
	title: string;
	width: number;
	height: number;
	descriptions: string[];
	position: 'left' | 'right';
}

export default function Roadmap() {
	const isTabletOrMobile = useMediaQuery({ maxWidth: BREAK_POINT.SM_TABLET })
	const timelines: Timeline[] = [
		{
			imgSrc: '/images/roadmap_1.svg',
			width: isTabletOrMobile ? 375.37 : 560,
			height: isTabletOrMobile ? 298 : 448,
			imgStyle: {
				marginLeft: '3rem',
			},
			title: 'Q3 2022',
			descriptions: [
				'Finalize plan',
				'Firm up the whitepaper & pitch deck & list of all products',
				'Looking for & close deal with the very first investors & backers to get initial funds for project',
				'Start contract for development',
				'Start building community on social platforms 2022',
			],
			position: 'left',
		},
		{
			imgSrc: '/images/roadmap_2.svg',
			width: isTabletOrMobile ? 375.37 : 384,
			height: isTabletOrMobile ? 298 : 432,
			imgStyle: {
				marginRight: '7.6875rem',
			},
			title: 'Q4 2022',
			descriptions: [
				'Teams will work on the documenting all products first: BRD, SRS, wireframes, technical architecture, etc..',
				'Design gameplay & concepts',
				'Develop GXZ token contract',
				'Develop NFT minting webpage (initial)',
				'Design gameplay (continue, need very detailed requirements)',
				'Design & visualize the NFTs',
				'Develop NFT miniting webpage (continue & complete)',
				'Design & visualize the NFTs (must finish at least all of NFTs for the first sale)',
				'Integrate all NFT materials with the minting page',
			],
			position: 'right',
		},
		{
			imgSrc: '/images/roadmap_3.svg',
			width: isTabletOrMobile ? 375.37 : 544,
			height: isTabletOrMobile ? 298 : 496,
			imgStyle: {
				marginLeft: '6.5rem',
			},
			title: 'Q1 2023',
			descriptions: [
				'Audit all contracts & finish materials for IDO & NFT launch',
				'Develop admin page to monitor the all game: both tokens & NFTs (initial)',
				'Develop NFT marketplace (if team has plan to do it)',
				'Develop game',
				'Develop admin page to monitor the all game: both tokens & NFTs (continue)',
				'Develop game (continue)',
				'Develop NFT marketplace (continue & complete)',
				'Develop NFT marketplace (continue & complete)',
				'Develop admin page to monitor the all game: both tokens & NFTs (continue & complete all major components)',
				'Develop game (continue)',
				'Develop user profile & inventory functions inside marketplace webpage (initial)',
			],
			position: 'left',
		},
		{
			imgSrc: '/images/roadmap_4.svg',
			width: isTabletOrMobile ? 375.37 : 320,
			height: isTabletOrMobile ? 298 : 384,
			imgStyle: {
				marginRight: '6.8125rem',
			},
			title: 'Q2 2023',
			descriptions: [
				'Develop game (continue)',
				'Develop user profile & inventory functions inside marketplace webpage (continue)',
				'Develop game (continue)',
				'Develop game',
				'Develop user profile & inventory functions inside marketplace webpage (continue & complete)',
				'Game UAT',
				'Release the beta/testnet version of the game',
			],
			position: 'right',
		},
		{
			imgSrc: '/images/roadmap_5.svg',
			width: isTabletOrMobile ? 375.37 : 720,
			height: isTabletOrMobile ? 298 : 448,
			title: 'Q3 2023',
			descriptions: [
				'Game UAT (continue)',
				'Prepapre for Google/Apple Store submission',
				'Preapre & deploy production system',
				'Submit to Google/Apple Store (without wallet function first, for easier to get approval)',
				'Develop admin page to monitor the all game: both tokens & NFTs (continue)',
				'Form devops & technical support team for 24/7 opearting & monitoring',
				'Develop in-game wallet functions (need to check the policies of Google/Apple Store at that moment carefully)',
				'Finish & submit the game version with wallet functionalities',
				'Build the analytics system to monitor in-game data (initial)',
			],
			position: 'left',
		},
		{
			imgSrc: '/images/roadmap_6.svg',
			width: isTabletOrMobile ? 375.37 : 432,
			height: isTabletOrMobile ? 298 : 400,
			imgStyle: {
				marginRight: '6rem',
			},
			title: 'Q4 2023',
			descriptions: [
				'Build the analytics system to monitor in-game data (continue)',
				'Monitor & bug fixes',
				'Improve game: game event/tournament/competition/etc..',
				'Improve game: challenges/quests/etc.. system',
				'Improve game: other ideas',
			],
			position: 'right',
		},
	];

	return (
		<section className='w-full pt-[9.8125rem] px-[32px]  ' id='roadmap'>
			<div className='flex justify-center mb-[1.25rem]'>
				<h1
					className={`text-[3.125rem] font-semibold gradient-about `}
				>
					Roadmap
				</h1>
			</div>

			<div className={` before:w-[1px] before:backgroundRoadmap before:contentEmpty before:hidden before:absolute desktop:before:block before:left-[50%] before:h-full relative pb-[8.0625rem] `}>
				{timelines.map((timeline, index) => (
					<TimelineSection index={index} key={index} timeline={timeline} />
				))}
			</div>
		</section>
	);
}

function TimelineSection({ timeline, index }: { timeline: Timeline, index: number }) {
	const { imgSrc, title, descriptions, position, imgStyle, width, height } =
		timeline;
	return (
		<div className={`${position === 'left' ? 'desktop:flex-row ' : 'desktop:flex-row-reverse'} flex flex-col-reverse pt-[35px] w-full desktop:py-[2rem] justify-center`}>
			<div
				itemScope
				itemType='http://schema.org/Organization'
				className={`flex relative mt-[1.0625rem] desktop:mt-[unset] h-full desktop:pt-[1.5rem] flex-col w-full desktop:w-[50%] ${position === 'left' ? 'items-start desktop:pr-[6.375rem] desktop:items-end' : 'items-start desktop:pl-[6.375rem] h-full '} tablet:max-w-[unset] ldPhone:max-w-[500px] mdPhone:max-w-[400px] smPhone:max-w-[300px] desktop:max-w-[unset] smPhone:justify-center ldPhone:flex ldPhone:w-full smPhone:mx-[auto]`}
			>
				<h1 itemProp='title' className='text-[2rem] text-white font-[700] text-right mb-[0.5rem] leading-[42px] desktop:leading-[55px] desktop:text-[2.5rem] '>
					{title}
				</h1>
				<div
					itemProp='point'
					className={`${position === 'left' ? 'pointLeftRoadmap' : 'pointRightRoadmap'} ${index === 0 ? 'bg-[#36c1ff] before:bg-[#36c1ff] ' :
					index === 1 ? 'bg-[#66abfc] before:bg-[#66abfc] ' :
					index === 2 ? 'bg-[#9198f9] before:bg-[#9198f9] ' :
				    index === 3 ? 'bg-[#c980f6] before:bg-[#c980f6] ' :
					index === 4 ? 'bg-[#a464c6] before:bg-[#a464c6] ' :
					'bg-[#58417d] before:bg-[#58417d] '} before:top-[1.5rem] before:contentEmpty before:hidden desktop:before:flex before:rotate-[45deg] before:w-[50px] before:h-[1px] before:rounded-[5px] before:absolute borderRoadmap absolute top-[50px] desktop:flex hidden items-center w-[1rem] h-[1rem] rounded-[5px]`}
				/>
				<ul
					itemProp='description'
					className={` max-w-[75%] ${position === 'left' ? 'directionMobile desktop:directionPC' : ''} `}
				>
					{descriptions.map((description, index) => (
						<li className={` mt-[0.9375rem] before:text-[#66abfc] before:contentColor before:inline-block before:font-bold flex list-none items-center text-white opacity-[0.8] leading-[24px] text-[1rem] ${position === 'left' ? ' text-left desktop:text-right desktop:before:ml-[1em] before:mr-[1em] desktop:before:mr-[unset] ' : ' text-left before:mr-[1em] '}`} key={index}>{description}</li>
					))}
				</ul>
			</div>
			<div className={` h-full w-full flex desktop:w-[50%] ${position === 'left' ? ' h-full justify-center desktop:justify-start ' : ' justify-center desktop:justify-end '}`}>
				<div className={`${imgStyle} ldPhone:flex ldPhone:justify-center ldPhone:w-full ldPhone:mx-[auto]`}>
					<LazyLoadCommon>
						<Image height={height} className=' h-full desktop:h-[unset] ' objectFit='contain' width={width} src={imgSrc} alt='logo' />
					</LazyLoadCommon>
				</div>
			</div>
		</div>
	);
}
