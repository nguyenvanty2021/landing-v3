import LazyLoadCommon from 'common/components/lazyLoad';
import { BREAK_POINT } from 'common/constants';
export default function About() {
	return (
		<section id='about'>
			<div className='w-full mt-[2rem] desktop:mt-[6.875rem] flex flex-col-reverse desktop:flex-row justify-center items-center '>
				<div className='flex px-[32px] w-full desktop:w-[50%] justify-start desktop:justify-end items-start desktop:items-end flex-col '>
					<div
						itemScope
						itemType='http://schema.org/Organization'
						className='flex flex-col mr-[5rem] tablet:max-w-[unset] ldPhone:max-w-[500px] smPhone:mx-[auto] mdPhone:max-w-[400px] smPhone:max-w-[300px] items-start desktop:items-end w-full desktop:w-[31rem]'
					>
						<h1
							itemProp='title'
							className={`text-left text-[2.5rem] font-[600] inline-block leading-[3.25rem] mt-[4.75rem] desktop:leading-[3.125rem] desktop:text-[3.125rem] desktop:text-right gradient-about`}
						>
							About
						</h1>
						<h2
							itemProp='sub-title'
							className='text-[#d47af5] mt-[1.25rem] font-[600] leading-[1.75rem] text-[1.25rem] desktop:text-[1.375rem] text-left desktop:text-right '
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
							vulputate libero et velit interdum, ac aliquet odio mattis.
						</h2>
						<h2
							itemProp='description'
							className='leading-[1.375rem] mt-[1.25rem] text-white text-[0.875rem] opacity-[0.8] text-left desktop:text-right'
						>
							per inceptos himenaeos. Curabitur tempus urna at turpis
							condimentum lobortis. Ut commodo efficitur neque. Ut diam quam,
							semper iaculis condimentum ac, vestibulum eu nisl.Lorem ipsum
							dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero
							et velit interdum, ac aliquet odio mattis. Class aptent taciti
							sociosqu ad litora torquent per conubia nostra, per inceptos
							himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
							Ut commodo efficitur neque. Ut diam quam, semper iaculis
							condimentum ac, vestibulum eu nisl.Lorem ipsum dolor sit amet,
							consectetur adipiscing elit.
							<br />
							<br />
							Per inceptos himenaeos. Curabitur tempus urna at turpis
							condimentum lobortis. Ut commodo efficitur neque. Ut diam quam,
							semper iaculis condimentum ac, vestibulum eu nisl.Lorem ipsum
							dolor sit amet, consectetur adipiscing elit.
						</h2>
					</div>
				</div>
				<div className='w-full desktop:w-[50%] flex justify-center desktop:justify-start'>
					<div className='w-[46.125rem] flex h-[350px] mTablet:h-[unset] justify-center desktop:justify-start '>
						<LazyLoadCommon>
							<picture>
								<source
									media={`(min-width: ${BREAK_POINT.M_TABLET}px)`}
									srcSet='/images/about-section.svg'
								/>
								<source
									media={`(min-width: ${BREAK_POINT.SM_TABLET}px)`}
									srcSet='/images/about-sectionTablet.svg'
								/>
								<source
									media={`(max-width: ${BREAK_POINT.M_MOBILE}px)`}
									srcSet='/images/about-sectionMobile.svg'
								/>
								<img
									src='/images/about-section.svg'
									alt='logo'
									className='w-[766px] h-[604.52px] object-contain'
								/>
							</picture>
						</LazyLoadCommon>
					</div>
				</div>
			</div>
		</section>
	);
}
