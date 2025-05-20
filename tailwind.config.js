/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      mob:{max: '510px'}
      // @media(max-width:510px) {}
    }
  },
  plugins: [],
}

