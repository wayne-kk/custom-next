/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F8A5C2', // Pink
          light: '#FFC8DD',
          dark: '#E77EA3',
        },
        secondary: {
          DEFAULT: '#A5DEF8', // Light blue
          light: '#C8EAFF',
          dark: '#7BBFE0',
        },
        accent: {
          DEFAULT: '#A5F8C3', // Light green
          light: '#C8FFE0',
          dark: '#7BE0A3',
        },
        cream: '#FFF6E9',
        warmGray: '#F5F5F5',
      },
      fontFamily: {
        'bubblegum': ['Bubblegum Sans', 'cursive'],
        'comfortaa': ['Comfortaa', 'cursive'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
    },
  },
  plugins: [],
};