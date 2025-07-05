/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        accent: '#00ffff',
      },
    },
  },
  darkMode: 'class', // optional if you want toggle support later
};

export default config;
