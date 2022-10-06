import Image from 'next/image';
import LazyLoadCommon from 'common/components/lazyLoad';
import React, { useMemo } from 'react';
import styles from '../style/statistic.module.scss';
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
		<section className={styles['statistic-container']}>
			<div className={`w-[1.9169rem] h-[4.375rem] object-contain`}>
				<LazyLoadCommon>
					<Image
						width={30.67}
						height={70}
						src='/images/roadmap_0.svg'
						alt='roadmap'
					/>
				</LazyLoadCommon>
			</div>
			<div className={styles['statistic-list']}>
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
			className={styles['statistic-box']}
		>
			<div className='w-[4.5rem] h-[4.5rem]'>
				<LazyLoadCommon>
					<Image width={width} height={60} src={icon} alt={icon} />
				</LazyLoadCommon>
			</div>
			<p className={styles['statistic-box_value']}>123</p>
			<p className={styles['statistic-box_label']}>{label}</p>
		</div>
	);
}
