/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '325': '325px',
      },
      textColor: {
        'grayish-brown': '#78746d',
        
      },
      backgroundColor: {},
      

    },
  },
  plugins: [],
}

