import LazyLoadCommon from 'common/components/lazyLoad';
import Image from 'next/image';
import React from 'react';
import styles from '../style/roadmap.module.scss';
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
			imgSrc: isTabletOrMobile ? '/images/roadmap_1Mobile.svg' : '/images/roadmap_1.svg',
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
			imgSrc: isTabletOrMobile ? '/images/roadmap_2Mobile.svg' : '/images/roadmap_2.svg',
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
			imgSrc: isTabletOrMobile ? '/images/roadmap_3Mobile.svg' : '/images/roadmap_3.svg',
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
			imgSrc: isTabletOrMobile ? '/images/roadmap_4Mobile.svg' : '/images/roadmap_4.svg',
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
			imgSrc: isTabletOrMobile ? '/images/roadmap_5Mobile.svg' : '/images/roadmap_5.svg',
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
			imgSrc: isTabletOrMobile ? '/images/roadmap_6Mobile.svg' : '/images/roadmap_6.svg',
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
		<section className={styles['roadmap-section']} id='roadmap'>
			<div className='flex justify-center mb-[1.25rem]'>
				<h1
					className={`text-[3.125rem] font-semibold  ${styles['gradient-text']}`}
				>
					Roadmap
				</h1>
			</div>

			<div className={styles['timeline-container']}>
				{timelines.map((timeline, index) => (
					<TimelineSection key={index} timeline={timeline} />
				))}
			</div>
		</section>
	);
}

function TimelineSection({ timeline }: { timeline: Timeline }) {
	const { imgSrc, title, descriptions, position, imgStyle } =
		timeline;
	const flex = position === 'left' ? 'flex-row ' : 'flex-row-reverse ';
	const boxClass = `timeline-box-${position}`;
	const imgClass = `timeline-img-${position}`;
	const listTimelineClass = `timeline-list-${position}`;
	const timelinePointClass = `timeline-point-${position}`;
	return (
		<div className={`${flex}  ${styles['timeline-child-container']}`}>
			<div
				itemScope
				itemType='http://schema.org/Organization'
				className={`${styles['timeline-box']} ${styles[boxClass]} tablet:max-w-[unset] ldPhone:max-w-[500px] mdPhone:max-w-[400px] smPhone:max-w-[300px] desktop:max-w-[unset] smPhone:justify-center ldPhone:flex ldPhone:w-full smPhone:mx-[auto]`}
			>
				<h1 itemProp='title' className={styles['timeline-title']}>
					{title}
				</h1>
				<div
					itemProp='point'
					className={`${styles[timelinePointClass]} ${styles['timeline-point']}`}
				/>
				<ul
					itemProp='description'
					className={`${styles['timeline-list']} ${styles[listTimelineClass]} `}
				>
					{descriptions.map((description, index) => (
						<li key={index}>{description}</li>
					))}
				</ul>
			</div>
			<div className={`${styles['timeline-img']} ${styles[imgClass]}`}>
				<div className={`${imgStyle} ldPhone:flex ldPhone:justify-center ldPhone:w-full ldPhone:mx-[auto]`}>
					<LazyLoadCommon>
						<Image height={100} width={100} src={imgSrc} alt='logo' />
					</LazyLoadCommon>
				</div>
			</div>
		</div>
	);
}
