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
      "hero-pattern4": "url('/img/bg4.jpeg')",
      "hero-pattern5": "url('/img/bg5.jpeg')",
      "hero-pattern6": "url('/img/bg6.jpg')",
      "hero-pattern7": "url('/img/bg7.avif')",
      "hero-pattern8": "url('/img/bg8.jpeg')",
      "hero-pattern9": "url('/img/bg9.jpeg')",
      "hero-pattern10": "url('/img/bg10.jpeg')",
      "hero-pattern11": "url('/img/bg11.jpeg')",
      "hero-pattern12": "url('/img/bg12.jpeg')",

    },
  },
};
export const darkMode = "class";
export const plugins = [nextui()];