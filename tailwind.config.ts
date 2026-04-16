import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'Inter', 'sans-serif'],
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'serif'],
        display: ['"Cormorant Garamond"', 'serif'],
      },
      colors: {
        gold: {
          50:  '#fdf9ed',
          100: '#f9eecc',
          200: '#f2d98b',
          300: '#e8bf50',
          400: '#dea828',
          500: '#c5901a',
          600: '#a97214',
          700: '#875714',
          800: '#714516',
          900: '#5f3918',
        },
        navy: {
          50:  '#f0f4f8',
          100: '#d9e5f0',
          200: '#b3cce0',
          300: '#7da8c9',
          400: '#4a81ae',
          500: '#2e6293',
          600: '#1e4d7a',
          700: '#153b61',
          800: '#0f2a47',
          900: '#0a1c30',
          950: '#060f1d',
        },
        ivory: {
          50:  '#fefefe',
          100: '#faf9f5',
          200: '#f5f2eb',
          300: '#ede7d9',
          400: '#e0d6c3',
          500: '#cfc3a8',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
