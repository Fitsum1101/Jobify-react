/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This line is crucial!
    "./public/**/*.html", // Include HTML files if you use them
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
