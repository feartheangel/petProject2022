// eslint-disable-next-line no-undef
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    colors: {
      defaultBg: '#F4F5F7',
      defaultBgBtn: '#2987CC',
      plusBtn: '#2987CC',
      minusBtn: ''
    },
    boxShadow: {
      bgBorderFilter: '-1px 0 0 #7A4487'
    },
    paddingTop: {
      headerTop: '35px'
    }
  },

  // eslint-disable-next-line no-undef
  plugins: [require('flowbite/plugin'), require('tw-elements/dist/plugin')]
}
