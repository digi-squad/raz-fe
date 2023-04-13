/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      small: '0.7rem',
      medium: '1rem',
      mid: '1.5rem',
      title: '2rem',
      titleSoon2 : '2.5rem',
      titleSoon: '4rem',
      TitleHeader : '3.75rem'
    },
    fontWeight: {
      titleWeight: '500',
      700: '700',

    },
    extend: {
      colors: {
        "primary-black": "#1A1A1A",
        "secondary-black": "#212121",
        "primary-gray": "#4D4D4D",
        "secondary-gray": "#D8D8D8",
        "tertiary-gray": "#979797",
        "accent-red": "#D94141",
      },
      fontFamily: {
        arimo: ["Arimo", "sans-serif"],
        playFair: ["Playfair Display", "serif"],
        openSans: ["Open Sans", "sans-serif"],
        playFairItalic: ["Playfair Display Italic", "serif"],
      },
      backgroundImage: {
        'defaultRaz': "url('/src/assets/images/raz-bg.webp')",
        'home-bg': "url('/src/assets/images/homepage-bg.webp')",
        'advert-bg': "url('/src/assets/images/ad-bg.webp')",
        'timeline-bg': "url('/src/assets/icons/truck-icon.svg')"
      }
    },
  },
  variants: {
    display: ["group-hover"],
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [],
  },
};
