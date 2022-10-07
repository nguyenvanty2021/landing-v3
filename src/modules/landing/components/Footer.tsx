/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import LazyLoadCommon from 'common/components/lazyLoad';
import { ROUTES } from 'common/constants';
type ListIntroduceProps = {
	id: number;
	content: {
		id: number;
		title: string;
		href: string;
	}[];
};
export default function Footer() {
	const listIntroduce: ListIntroduceProps[] = [
		{
			id: 1,
			content: [
				{
					id: 1,
					title: 'About',
					href: '#about',
				},
				{
					id: 2,
					title: 'Introduction',
					href: '#introduction',
				},
				{
					id: 3,
					title: 'Token',
					href: '#token',
				},
				{
					id: 4,
					title: 'Team',
					href: '#team',
				},
			],
		},
		{
			id: 2,
			content: [
				{
					id: 1,
					title: 'Contact',
					href: '#contact',
				},
				{
					id: 2,
					title: 'Roadmap',
					href: '#roadmap',
				},
				{
					id: 3,
					title: 'FAQ',
					href: '#faq',
				},
				{
					id: 4,
					title: 'Terms of service',
					href: '#terms-of-service',
				},
			],
		},
	];
	return (
		<footer className='h-[fit-content] w-full desktop:w-screen bg-[#071423] flex justify-center items-end desktop:h-[21.875rem]'>
			<div className='flex pt-[3.875rem] flex-col mx-[9.375rem] max-w-[100%] h-full'>
				<div className='flex flex-col desktop:flex-row items-center px-[2rem] desktop:px-[unset] desktop:items-start '>
					<div className='w-[8.125rem] h-[8.125rem]'>
						<Link href={ROUTES.LANDING} passHref>
							<a>
								<LazyLoadCommon>
									<Image
										width={130}
										height={124.77}
										src='/images/logo.svg'
										alt='logo'
									/>
								</LazyLoadCommon>
							</a>
						</Link>
					</div>
					<div className='w-full desktop:w-[unset] mt-[3.75rem] flex grow-[1] desktop:mt-[unset] justify-center desktop:justify-around desktop:ml-[10rem] flex-col desktop:flex-row '>
						<div className='flex justify-between desktop:justify-start flex-row'>
							{listIntroduce?.length > 0 &&
								listIntroduce.map((values) => {
									return (
										<div
											key={values.id}
											className='desktop:mr-[8.125rem] flex flex-col justify-between w-[10rem] h-[10rem]'
										>
											{values?.content?.length > 0 &&
												values.content.map((valuesHref) => {
													return (
														<Link
															href={valuesHref.href}
															key={valuesHref.id}
															passHref
															prefetch={false}
														>
															<a className='text-white font-semibold opacity-70 font-[14px]'>
																{valuesHref.title}
															</a>
														</Link>
													);
												})}
										</div>
									);
								})}
						</div>
						<div
							itemScope
							itemType='http://schema.org/Organization'
							className='mt-[3.75rem] desktop:mt-[unset] flex flex-col'
						>
							<button itemProp='pitch-deck' className={`flex items-center bg-[#553A5F] gap-[10px] px-[0.75rem] py-[0.1875rem] rounded-[5px] w-[fit-content] mt-[1.125rem]`}>
								<h1 className='text-[0.75rem] tracking-[5px] text-[#d47af5] leading-[1rem] font-[700]'>PITCH DECK</h1>
								<LazyLoadCommon>
									<Image
										width={10}
										height={10}
										src='/icons/arrow-right.svg'
										alt='logo'
									/>
								</LazyLoadCommon>
							</button>
							<button
								itemProp='white-paper'
								className={`flex items-center bg-[#553A5F] gap-[10px] px-[0.75rem] py-[0.1875rem] rounded-[5px] w-[fit-content] mt-[1.125rem]`}
							>
								<h1 className='text-[0.75rem] tracking-[5px] text-[#d47af5] leading-[1rem] font-[700]'>WHITE PAPER</h1>
								<LazyLoadCommon>
									<Image
										width={10}
										height={10}
										src='/icons/arrow-right.svg'
										alt='logo'
									/>
								</LazyLoadCommon>
							</button>
						</div>
					</div>
				</div>

				<div className='mt-[2rem] footer w-screen h-[7.9375rem] desktop:h-[unset] desktop:w-[unset] grow-[1] items-center justify-between py-[32px] desktop:py-[unset] flex-col desktop:flex-row flex desktop:mt-[3rem]'>
					<h1 className='opacity-50 text-white text-[0.875rem]'>
						©2022 Galactix Zone. All rights reserved
					</h1>

					<div
						itemScope
						itemType='http://schema.org/Organization'
						className='flex'
					>
						<a
							itemProp='facebook'
							className='w-[1.5625rem] h-[1.5625rem] ml-[1.8125rem]'
						>
							<LazyLoadCommon>
								<Image
									src='/icons/facebook.svg'
									alt='facebook'
									width={30}
									height={30}
								/>
							</LazyLoadCommon>
						</a>
						<a
							itemProp='telegram'
							className='w-[1.5625rem] h-[1.5625rem] ml-[1.8125rem]'
						>
							<LazyLoadCommon>
								<Image
									src='/icons/telegram.svg'
									alt='telegram'
									width={25}
									height={22.5}
								/>
							</LazyLoadCommon>
						</a>
						<a
							itemProp='twitter'
							className='w-[1.5625rem] h-[1.5625rem] ml-[1.8125rem]'
						>
							<LazyLoadCommon>
								<Image
									src='/icons/twitter.svg'
									alt='twitter'
									width={27.31}
									height={22.5}
								/>
							</LazyLoadCommon>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
