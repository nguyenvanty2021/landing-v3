import LazyLoadCommon from 'common/components/lazyLoad';
import { BREAK_POINT, ROUTES } from 'common/constants';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
const MenuComponent = ({
	menu,
	handleOpenMenu,
	listMenu,
}: {
	menu: boolean;
	handleOpenMenu: (status: boolean) => void;
	listMenu: {
		id: number;
		title: string;
		href: string;
	}[];
}) => {
	const [idMenuClicked, setIdMenuClicked] = useState<number>(1);
	return (
		<section
			className={`fixed z-10 pb-[40px] desktop:pb-0 right-0 top-0 translate-x-[100%] transitionHeader ${
				menu ? 'translate-x-[-10px] bg-0C1D33 w-screen h-screen' : ''
			} `}
		>
			<div className='flex mb-[96px] justify-between items-center mx-[32px] mt-[16px] '>
				<div className='cursor-pointer'>
					<Link href={ROUTES.LANDING} passHref>
						<a>
							<LazyLoadCommon>
								<picture>
									<source
										media={`(min-width: ${BREAK_POINT.M_TABLET}px)`}
										srcSet='/images/logo.svg'
									/>
									<source
										media={`(max-width: ${BREAK_POINT.SM_TABLET}px)`}
										srcSet='/images/logoMobile.svg'
									/>
									<img
										src='/images/logo.svg'
										alt='logo'
										className='w-[90px] h-[86.38px] object-contain'
									/>
								</picture>
							</LazyLoadCommon>
						</a>
					</Link>
				</div>
				<div className='cursor-pointer'>
					<LazyLoadCommon>
						<Image
							onClick={() => handleOpenMenu(!menu)}
							width={14.73}
							height={14.73}
							src='/images/close.svg'
							alt='CloseIcon'
							objectFit='contain'
						/>
					</LazyLoadCommon>
				</div>
			</div>
			<ul className='flex justify-center items-center flex-col'>
				{listMenu?.length > 0 &&
					listMenu.map((values) => {
						return (
							<li
								onClick={() => setIdMenuClicked(values.id)}
								className={`mb-[40px] ${
									idMenuClicked === values.id ? 'text-blue-20' : ''
								} last:mb-[0] font-[400] text-[24px] leading-[32px] text-center text-white opacity-[0.8] `}
								key={values.id}
							>
								<Link href={values.href} prefetch={false}>
									<a>{values.title}</a>
								</Link>
							</li>
						);
					})}
			</ul>
			<div className='flex justify-center mt-[151px] items-center '>
				<button
					className='w-full bg-header cursor-pointer max-w-[310px] font-[600] text-[16px]
				 leading-[24px] text-center text-white h-[47px] rounded-[40px] px-[22px] py-[12px] '
				>
					Launch App
				</button>
			</div>
		</section>
	);
};
export default MenuComponent;
