/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens : {
        'handphone' : '412px',
        'tablet' : '640px',
        'laptop' : '1040px',
      },
    }
  },
  plugins: [],
}

