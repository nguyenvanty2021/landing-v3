/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		backgroundImage: {
			"landing": "url('../../public/images/background.svg')",
			"preFooterPC": "url('../../public/images/footer_1.svg')",
			"preFooterMobile": "url('../../public/images/footer_2.svg')"
		},
		screens: {
			// mobile: '320px',
			// // => @media (min-width: 320px) { ... }
			//
			// tablet: '640px',
			// // => @media (min-width: 640px) { ... }
			//
			// laptop: '1024px',
			// // => @media (min-width: 1024px) { ... }
			//
			// desktop: '1280px',
			// // => @media (min-width: 1280px) { ... }
			smPhone: '375px',
			mdPhone: '475px',
			ldPhone: '576px',
			mobile: '640px',
			// => @media (min-width: 320px) { ... }

			tablet: '768px',
			// => @media (min-width: 1024px) { ... }
			mTablet: '992px',
			smDesktop: '1024px',
			desktop: '1280px',
			mDesktop: '1366px',
			lDesktop: '1440px'
			// => @media (min-width: 1280px) { ... }
		},

		extend: {
			animation: {
				'spin-slow': 'spin 3s linear infinite',
				wiggle: 'wiggle 1s ease-in-out infinite'
			},
			keyframes: {
				wiggle: {
					'0%, 100%': {
						transform: 'rotate(-12deg)'
					},
					'50%': {
						transform: 'rotate(12deg)'
					}
				}
			},
			transitionDuration: {
				2000: '2000'
			},
			fontSize: {
				h1: ['60px', '75px'],
				h2: ['40px', '52px'],
				h3: ['32px', '42px'],
				h4: ['24px', '32px'],
				h5: ['20px', '28px'],
				h6: ['18px', '26px'],
				h7: ['16px', '24px'],
				h8: ['14px', '22px'],
				h9: ['12px', '16px'],
				h10: ['10px', '12px'],
			},
			backgroundImage: {
				'header': 'linear-gradient(102.92deg,#36c1ff 6.55%,#77a3f8 47.11%,#bd81f1 71.51%,#cf79ee 98.22%)',
				'blue-to-pink-102deg':
					'linear-gradient(102.92deg, #36C1FF 6.55%, #77A3F8 47.11%, #BD81F1 71.51%, #CF79EE 98.22%);',
			},
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			'background-dark': '#061322',
			white: '#FFFFFF',
			'white-smooth': '#F9F9F9',
			ebony: '#2C313D',
			'ebony-20': '#272E39',
			'553A5F': '#553A5F',
			'blue-zodiac': '#424959',
			'071423': '#071423',
			'0c1e32': '#0c1e32',
			'black-russian': '#121327',
			'black-10': '#0E1A2B',
			'9198f9': '#9198f9',
			'58417d': '#58417d',
			'c980f6': '#c980f6',
			violet: '#9e90f380',
			'chetwode-blue': '#9793F3',
			'0C1D33': '#0C1D33',
			'66abfc': '#66abfc',
			'a464c6': '#a464c6',
			purple: '#262645',
			'purple-10': '#2f3041',
			'purple-20': '#9295F4',
			'purple-30': '#D47AF5',
			blue: '#1890FF',
			'blue-10': '#78A1F8',
			'blue-20': '#36C1FF',
			'black-velvet': '#232436',
			'dim-gray': '#71717d',
			'gray-10': '#ffffff1f',
			'gray-20': '#ffffffb3',
			'gray-30': '#ffffff12',
			'gray-40': '#ffffff80',
			gray: '#353945',
			'gray-50': '#2C2E32',
			'butterfly-bush': '#59518C',
			green: '#35B770',
			'red-10': '#FF0000',
			'charcoal-purple': '#2B3A51',
		},
	},
	plugins: [],
};
