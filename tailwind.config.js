const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */

export const content = [
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",

  // Or if using `src` directory:
  "./src/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    fontSize: {
      '20px': '20px', // Add your custom size here
    },
    colors: {
      'primary': '#D8152F'
    },
    backgroundImage: {
      "hero-pattern": "url('/img/bg1.jpeg')",
      "hero-pattern2": "url('/img/bg2.jpeg')",
      "hero-pattern3": "url('/img/bg3.jpeg')",

    },
  },
};
export const darkMode = "class";
export const plugins = [nextui()];