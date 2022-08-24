/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {
      xs: '360px',
      qs: '500px',
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }
      blg: '1165px',
      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1420px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#6C63FF',
      },
      backgroundColor: {
        primary: '#6C63FF',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
