/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        story: ['Georgia', 'Cambria', '"Times New Roman"', 'serif'],
      },
      keyframes: {
        'page-shimmer': {
          '0%': { boxShadow: '-8px 0 20px rgba(0,0,0,0.15)' },
          '100%': { boxShadow: '-2px 0 6px rgba(0,0,0,0.08)' },
        },
      },
    },
  },
  plugins: [],
};
