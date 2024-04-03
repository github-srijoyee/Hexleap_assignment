import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode:["class"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
      },
      textUnderlineOffset: {
        8: '16px',
      },
      height:{
        100:'30rem',
      }
    },
  },
  variants:{
    extend:{},
  },
  plugins: [],
};
export default config;
