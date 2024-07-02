import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'gradient-border': 'linear-gradient(to right, #FFC876, #79FFF7, #9F53FF, #FF98E2)', // Define the gradient colors here

        },
      borderImageSlice: {
        '1': '1',
      },
    },
  },
  plugins: [],
};
export default config;
