import Link from 'next/link';
import Image from 'next/image';
import LazyLoadCommon from 'common/components/lazyLoad';
import { ROUTES } from 'pages';
export default function Header() {
	const listMenu = [
		{
			id: 1,
			title: 'About',
			href: '#about',
		},
		{
			id: 2,
			title: 'Whitepaper',
			href: '#whitepaper',
		},
		{
			id: 3,
			title: 'Roadmap',
			href: '#roadmap',
		},
		{
			id: 4,
			title: 'GXZ Token',
			href: '#gxz-token',
		},
	];
	return (
		<header
			className='flex h-[5rem] relative items-center w-full justify-between py-[1rem] px-[2rem] desktop:p-[unset] desktop:h-[6.875rem]'
			id='header'
		>
			<div className='desktop:ml-[9.375rem] relative h-full w-[3.125rem] desktop:w-[5.625rem] '>
				<div className='h-[3.125rem] absolute w-full bottom-0 desktop:h-[5.3987rem] desktop:mb-[0.2263rem]'>
					<Link href={ROUTES.LANDING} passHref>
						<a>
							<LazyLoadCommon>
								<Image
									src='/images/logo.svg'
									alt='logo'
									height={86.38}
									width={90}
								/>
							</LazyLoadCommon>
						</a>
					</Link>
				</div>
			</div>
			<div className='w-[3rem] h-full justify-end desktop:justify-start items-center desktop:items-start desktop:h-[unset] flex desktop:hidden desktop:w-[unset] '>
				<button>
					<LazyLoadCommon>
						<Image
							width={30}
							height={30}
							src='/icons/header_1.svg'
							alt='logo'
						/>
					</LazyLoadCommon>
				</button>
			</div>
			<ul
				id='menu'
				itemScope
				itemType='http://schema.org/Organization'
				className='hidden desktop:flex items-center pt-[2.8125rem] mr-[9.375rem]'
			>
				{listMenu?.length > 0 &&
					listMenu.map((values) => {
						return (
							<li
								itemProp='about'
								key={values.id}
								className='text-white hover:text-[#36C1FF] select-none cursor-pointer mr-[3.125rem] text-[1.125rem] font-[500]'
							>
								<Link href={values.href} prefetch={false}>
									<a>{values.title}</a>
								</Link>
							</li>
						);
					})}
				<button itemProp='launch-app' className='font-[600] bg-header rounded-[40px] text-white text-[1.125rem] py-[0.75rem] px-[1.375rem]'>
					Launch App
				</button>
			</ul>
		</header>
	);
}
