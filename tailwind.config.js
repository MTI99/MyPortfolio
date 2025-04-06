/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Playwrite: ["Playwrite AU QLD Guides", "serif"],
        Delius: ["Delius Unicase", "serif"],
        Yusi: [ "Yusei Magic", 'serif'],
      },
    },
  },
  plugins: [],
}

