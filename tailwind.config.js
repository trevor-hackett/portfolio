/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/root.tsx",
    "./app/compnents/**/*.{js,ts,jsx,tsx}",
    "./app/routes/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
