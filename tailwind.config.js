module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
				'primary': '#5B6CFF',
				'section-title': '#EBEDFF',
				'card-bg': '#F2F4FF',
        'title-color': '#2E3A59',
        'content-color': '#4B4B4B',
        'nav-color': '#F7F8FA',
        'app-bg': '#FFFFFF',

				'primary-dark': '#5B6CFF',
				'section-title-dark': '#102D44',
				'card-bg-dark': '#1E3851',
        'title-color-dark': '#FFFFFF',
        'content-color-dark': '#BFBFBF',
        'nav-color-dark': '#151B28',
        'app-bg-dark': '#0B111E',
			},
      height: {
        '18': '4.5rem',
      },
      fontSize :{
        "10xl": '10rem',
      },
      width: {
        '3.25':'0.8125rem',
        '3.75':'0.9375rem',
        '128': '32rem',
      },
      boxShadow: {
        'top': '0px -3px 6px 0px rgb(0 0 0 / 0.1)',
      },
      minWidth: {
        '24': '6rem',
        '32': '8rem',
        '80': '20rem',
      },
      maxWidth: {
        '128': '20rem',
      },
      padding: {
        '17': '4.25rem',
      },
      lineHeight: {
        '16': '4rem',
        '24': '6rem',
        '32': '8rem',
      },
      scale: {
        '175': '1.75',
      },
    },
    fontFamily: {
      'poppins': ['Poppins'],
    },
  },
  plugins: [],
}
