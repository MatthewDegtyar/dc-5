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
    fontFamily: {
      'sanomat-medium': ['Sanomat Medium', 'Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      'sanomat-light': ['Sanomat Light', 'Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      'guardian-regular': ['Guardian Sans Regular', 'Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      'guardian-medium': ['Guardian Sans Medium', 'Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      'guardian-light': ['Guardian Sans Light', 'Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],


    },
    backgroundImage: {
      "hero-pattern": "url('/img/bg1.webp')",
      "hero-pattern2": "url('/img/bg2.webp')",
      "hero-pattern3": "url('/img/bg3.webp')",
      "hero-pattern4": "url('/img/bg4.webp')",
      "hero-pattern5": "url('/img/bg5.webp')",
      "hero-pattern6": "url('/img/bg6.webp')",
      "hero-pattern7": "url('/img/bg7.webp')",
      "hero-pattern8": "url('/img/bg8.webp')",
      "hero-pattern9": "url('/img/bg9.webp')",
      "hero-pattern10": "url('/img/bg10.webp')",
      "hero-pattern11": "url('/img/bg11.webp')",
      "hero-pattern12": "url('/img/bg12.webp')",

    },
  },
};
export const darkMode = "class";
export const plugins = [nextui()];