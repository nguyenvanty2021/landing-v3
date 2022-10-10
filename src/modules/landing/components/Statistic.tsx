import Image from 'next/image';
import LazyLoadCommon from 'common/components/lazyLoad';
import { numberWithSymbol } from 'common/helpers/number';
import React, { useEffect, useMemo, useState } from 'react';
import { getStatistics } from 'apis/landing';
type IStatistic = {
	totalSupply: number;
	currentSupply: number;
	tokensBurned: number;
	totalHolders: number;
};
export default function Statistic() {
	const defaultData: IStatistic = {
		totalSupply: 0,
		currentSupply: 0,
		tokensBurned: 0,
		totalHolders: 0,
	};
	const [statistic, setStatistic] = useState<IStatistic>(defaultData);
	const statisticBoxes = useMemo(
		() => [
			{
				label: 'Total Supply',
				value: statistic.totalSupply,
				icon: '/icons/statistic_1.svg',
				width: 59.49,
			},
			{
				label: 'Current Supply',
				value: statistic.currentSupply,
				icon: '/icons/statistic_2.svg',
				width: 59.97,
			},
			{
				label: 'Tokens Burned',
				value: statistic.tokensBurned,
				icon: '/icons/statistic_3.svg',
				width: 43.93,
			},
			{
				label: 'Total Holders',
				value: statistic.totalHolders,
				icon: '/icons/statistic_4.svg',
				width: 59.98,
			},
		],
		[statistic]
	);
	useEffect(() => {
		const getStatistic = async () => {
			const [data, err] = await getStatistics();

			if (err) {
				setStatistic(defaultData);
			} else {
				const { current_supply, total_burned, total_holders, total_supply } =
					data.data;
				setStatistic({
					currentSupply: current_supply,
					totalSupply: total_supply,
					tokensBurned: total_burned,
					totalHolders: total_holders,
				});
			}
		};
		getStatistic();
	}, []);
	return (
		<section className='desktop:px-[unset] flex flex-col items-center w-full mt-[3.4375rem] desktop:mt-[1rem] px-[2rem]'>
			<div className={`w-[1.9169rem] h-[4.375rem] object-contain`}>
				<LazyLoadCommon>
					<Image
						width={30.67}
						height={70}
						src='/images/roadmap_0.svg'
						alt='roadmap'
						objectFit='contain'
					/>
				</LazyLoadCommon>
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
	value,
}: {
	label: string;
	icon: string;
	width: number;
	value: number;
}) {
	return (
		<div
			itemScope
			itemType='http://schema.org/Organization'
			id='whitepaper'
			className='desktop:mr-[1.875rem] last:mb-[0] desktop:last:mb-[unset] last:mr-[0] aspect-[1] desktop:aspect-[unset] grow-[0] order-[0] flex-none backgroundStatistic py-[3.125rem] px-[1.9375rem] flex flex-col justify-center items-center h-[19.4375rem] desktop:h-[15.625rem] w-[19.4375rem] desktop:w-[16.4375rem] desktop:mb-[unset] '
		>
			<div className='w-[4.5rem] mb-[1.25rem] flex justify-center h-[4.5rem]'>
				<LazyLoadCommon>
					<Image
						width={width}
						objectFit='contain'
						className='flex-[none] order-[0] grow-[0]'
						height={60}
						src={icon}
						alt={icon}
					/>
				</LazyLoadCommon>
			</div>
			<div className='group relative'>
				<p className='flex relative max-w-[222.5px] dot text-center text-white flex-none order-[0] grow-[0] leading-[42px] text-[2rem] font-[600]'>
					{numberWithSymbol(value, '.')}
				</p>
				<div className='group-hover:opacity-[1] text-[10px] p-[0.5rem] group-hover:visible rounded-[4px] absolute bg-[black] top-[110%] w-full z-[10] opacity-[0] invisible transition '>
					<p>{numberWithSymbol(value, '.')}</p>
				</div>
			</div>
			<p className='flex text-center flex-none order-[1] grow-[0] opacity-[0.6] text-white leading-[24px] text-[1rem]'>
				{label}
			</p>
		</div>
	);
}
