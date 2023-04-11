/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      small: '0.7rem',
      medium: '1rem',
      mid: '1.5rem',
      title: '2rem',
    },
    fontWeight: {
      titleWeight: '500',
      700 : '700',

    },
    extend: {
      screens: {
        'handphone': '412px',
        'tablet': '640px',
        'laptop': '1040px',
      },
      width: {
        'image': '15px',
        'image1.5' : '20px',
        'image2': '25px',
        '50': '50px',
        'textimage': '100px',
        'ProfileImage': '100px',
        '150': '150px',
      },
      spacing: {
        'wFormProfile': '5vw',
        'hFormProfile': '1vh',
      },
    }
  },
  plugins: [],
}

