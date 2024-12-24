/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-purple': '#6728AC', // Previously added solid color
        'dark-blue': '#301d4f',    // New custom color
        'custom-purple': '#2b1949',
        'custom-purpl': '#8471ab',
        'custom-purpl2': '#522282',
        'custom-bg1': '#d7cfe9',
        'custom-bg2': '#e5ebf2',
        'custom-textCol': '#8e2e72',
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(315deg, #7729C8 0%, #6728AC 100%)',
        'bg1': "url('/src/assets/images/bg.png')",
        'bg2': "url('/src/assets/images/bg2.png')",
        'bg3': "url('/src/assets/images/bg3.jpg')",
      },
      fontFamily: {
        sans: ['Ubuntu', 'sans-serif'], // Set Ubuntu as the default sans-serif font
      },
    },
  },
  plugins: [],
}

