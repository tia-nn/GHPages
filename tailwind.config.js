import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bgcolor: colors.sky[50],
        'sky-blue': {
          '50': '#ecfcff',
          '100': '#d0f5fd',
          '200': '#a6ebfb',
          '300': '#72ddf7',
          DEFAULT: '#72ddf7',
          '400': '#25c0eb',
          '500': '#0aa4d0',
          '600': '#0b82af',
          '700': '#10698e',
          '800': '#175673',
          '900': '#174762',
          '950': '#092e43',
        },
        'portage': {
          '50': '#eff3fe',
          '100': '#e2eafd',
          '200': '#cad8fb',
          '300': '#aabdf7',
          '400': '#8093f1',
          DEFAULT: '#8093f1',
          '500': '#6a77ea',
          '600': '#4e51dd',
          '700': '#4041c2',
          '800': '#36389d',
          '900': '#32357d',
          '950': '#1e1f48',
        },
        'lavender': {
          '50': '#f9f6fe',
          '100': '#f2ebfc',
          '200': '#e7dafa',
          '300': '#d4bdf5',
          '400': '#b388eb',
          DEFAULT: '#b388eb',
          '500': '#9f69e3',
          '600': '#894ad3',
          '700': '#7438b8',
          '800': '#623297',
          '900': '#51297a',
          '950': '#351358',
        },
        'lavender-rose': {
          '50': '#fef5fe',
          '100': '#fce9fe',
          '200': '#fad2fc',
          '300': '#f7aef8',
          DEFAULT: '#f7aef8',
          '400': '#f37ff3',
          '500': '#e74ee6',
          '600': '#cb2ec8',
          '700': '#a823a2',
          '800': '#891f83',
          '900': '#711e6b',
          '950': '#4a0844',
        },
        'french-lilac': {
          '50': '#fff4fd',
          '100': '#ffe8fc',
          '200': '#fdc5f5',
          DEFAULT: '#fdc5f5',
          '300': '#fbacec',
          '400': '#f77bdd',
          '500': '#ed48cb',
          '600': '#d128ab',
          '700': '#ad1e8a',
          '800': '#8d1b6e',
          '900': '#741b5b',
          '950': '#4d0539',
        },
      }
    },
  },
  plugins: [],
}

