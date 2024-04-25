/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        alibaba: ["alibaba"],
        kalameh: ["kalameh"],
      },
      colors: {
        black: "var(--black)",
        blue: "var(--blue)",
        green: "var(--green)",
        white: "var(--white)",
        gray: "var(--gray)",
      },
    },
  },
  plugins: [],
};
