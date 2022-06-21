/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    fontSize: {
      sm: '16px',
      lg: '20px',
      xl: '68px',
    },
    extend: {
      fontFamily: {
        arvo: ['Arvo', 'serif'],
      },
    },
  },
  plugins: [],
  content: ['./src/**/*.{js,jsx,ts,tsx,html}', './public/index.html'],
};
