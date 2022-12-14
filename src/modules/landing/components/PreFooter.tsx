import React from 'react';
export default function PreFooter() {
	return (
		<section
			id='gxz-token'
			className='flex bg-no-repeat bg-cover justify-center bg-center
		 w-full bg-preFooterMobile desktop:bg-preFooterPC smPhone:h-[27.375rem] mdPhone:h-[27.375rem]
		  ldPhone:h-[22.375rem]  tablet:h-[18.375rem] smDesktop:h-[20.375rem] desktop:h-[27.375rem] px-[2rem]
		  desktop:px-[unset] items-start desktop:items-center'
		>
			<div
				itemScope
				itemType='http://schema.org/Organization'
				className='flex flex-col items-center desktop:px-[19.75rem]'
			>
				<h2
					itemProp='content'
					className='text-[2rem] leading-[2.625rem] text-purple-30 text-center desktop:leading-[2.8125rem]
					 font-[600] desktop:font-[500] tablet:w-[45.4375rem] smDesktop:w-[50.4375rem] desktop:w-[46.25rem] desktop:text-[1.875rem]'
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
					vulputate libero et velit interdum, ac aliquet odio mattis.
				</h2>
				<button
					itemProp='launch-app-btn'
					className={`py-[0.75rem] rounded-[40px] bg-header text-white text-[1.125rem] px-[1.375rem] font-[600] w-[12.5rem] mt-[2.5rem]`}
				>
					Launch App
				</button>
			</div>
		</section>
	);
}
