/** @type {import('tailwindcss').Config} */
export default {
 content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
 theme: {
  container: {
   center: true,
   padding: "1rem",
  },
  extend: {
   fontFamily: {
    main: ["Rubik Variable", "sans-serif"],
   },
  },
 },
 plugins: [],
};
