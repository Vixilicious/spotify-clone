/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#000000',
        'bg-dimmed': '#121212',
        text: '#ffffff',
        'text-dimmed': '#b3b3b3',
        primary: '#fca333',
      },
    },
  },
  plugins: [],
};
