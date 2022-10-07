import Image from 'next/image';
import React, { useMemo } from 'react';
export default function Statistic() {
	const statisticBoxes = useMemo(() => {
		return [
			{
				label: 'Total Supply',
				value: 123,
				icon: '/icons/statistic_1.svg',
				width: 59.49,
			},
			{
				label: 'Current Supply',
				value: 123,
				icon: '/icons/statistic_2.svg',
				width: 59.97,
			},
			{
				label: 'Tokens Burned',
				value: 123,
				icon: '/icons/statistic_3.svg',
				width: 43.93,
			},
			{
				label: 'Total Holders',
				value: 123,
				icon: '/icons/statistic_4.svg',
				width: 59.98,
			},
		];
	}, []);

	return (
		<section className='desktop:px-[unset] flex flex-col items-center w-full mt-[3.4375rem] desktop:mt-[1rem] px-[2rem]'>
			<div className={`w-[1.9169rem] h-[4.375rem] object-contain`}>
				<Image
					width={30.67}
					height={70}
					src='/images/roadmap_0.svg'
					alt='roadmap'
					objectFit='contain'
				/>
			</div>
			<div className='desktop:flex grid tablet:grid-cols-2 flex-col tablet:w-[unset] gap-[30px] desktop:gap-[unset] justify-center items-center desktop:w-full mt-[2.375rem] desktop:flex-row'>
				{statisticBoxes.map((box, index) => (
					<StatisticBox key={index} {...box} />
				))}
			</div>
		</section>
	);
}

function StatisticBox({
	label,
	icon,
	width,
}: {
	label: string;
	icon: string;
	width: number;
}) {
	return (
		<div
			itemScope
			itemType='http://schema.org/Organization'
			id='whitepaper'
			className='desktop:mr-[1.875rem] last:mb-[0] desktop:last:mb-[unset] last:mr-[0] aspect-[1] desktop:aspect-[unset] grow-[0] order-[0] flex-none backgroundStatistic py-[3.125rem] px-[1.9375rem] flex flex-col justify-center items-center h-[19.4375rem] desktop:h-[15.625rem] w-[19.4375rem] desktop:w-[16.4375rem] desktop:mb-[unset] '
		>
			<div className='w-[4.5rem] flex justify-center h-[4.5rem]'>
				<Image
					width={width}
					className='flex-[none] order-[0] grow-[0]'
					height={60}
					src={icon}
					alt={icon}
					objectFit='contain'
				/>
			</div>
			<p className='flex text-center text-white flex-none order-[0] grow-[0] mt-[1.25rem] leading-[42px] text-[2rem] font-[600]'>
				123
			</p>
			<p className='flex text-center flex-none order-[1] grow-[0] opacity-[0.6] text-white leading-[24px] text-[1rem]'>
				{label}
			</p>
		</div>
	);
}
