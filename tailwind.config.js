/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        dark: "#1b1b1b",
        light: "#fff",
      }, fontFamily:{
        mr: ["var(--font-mr)"],
        in: ["var(--font-in)"],
      }
   
    },
  },
  plugins: [],
}
