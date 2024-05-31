/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily:{
        ubuntu : ["Ubuntu", "sans-serif"],
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
  
}

