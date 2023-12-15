/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        buttonColor: {
          400: '#2F79F0',
          600: '#1f5dc0',
          900: '#1c478b',
        },
      },
      backgroundColor: {
        buttonBg: {
          400: '#2F79F0',
          600: '#1f5dc0',
          900: '#1c478b',
        },
        disabledButton: '#b9b5bb',
      },
    },
    screens: {
      xs: '320px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
