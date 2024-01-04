/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        buttonColor: {
          200: '#baf0ff',
          300: '#00a3d7',
          400: '#1073c9',
          500: '#003354',
          600: '#0b5394',
          700: '#004979',
          800: '#073763',
          900: '#001522',
        },
      },
      backgroundColor: {
        buttonBg: {
          200: '#baf0ff',
          300: '#00a3d7',
          400: '#00538a',
          500: '#003354',
          600: '#0b5394',
          700: '#004979',
          800: '#073763',
          900: '#001522',
        },
        disabledButton: '#b9b5bb',
      },
      keyframes: {
        fadeinout: {
          '0%': { opacity: 0 },
          '25%': { opacity: 1 },
          '75%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
      animation: {
        fadeinout: 'fadeinout 4s linear forwards',
      },
    },
    screens: {
      xs: '450px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
