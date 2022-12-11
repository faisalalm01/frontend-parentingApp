/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    color: {
      "background":{
        'primary': "#19191C",
        'secondary': "#232427",
      },
      'custom-text': {
        'primary': "#c8c8c9",
        'secondary': "#da0138",
      },
      "form": {
        'primary': "#D9D9D9",
        'secondary': "#2B2C30",
      }
    }
  },
  plugins: [],
}
