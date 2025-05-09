import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      ...colors,
      darkBackground: '#141414',
    },
    extend: {
      minHeight: {
        'main-container': 'calc(100vh - 72px)',
      },
      zIndex: {
        1: 1,
        2: 2,
      },
    },
  },
  plugins: [],
};
