import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: '#fff',
      gray: '#F5F5F5',
      black: '#000',
      blue: '#62A4F2',
      yellow: '#FFE145',
      red: '#F56363',
    },
    screens: {
      '2xl': { 'max': '1690px' },
      'xl': { 'max': '1280px' },
      'lg': { 'max': '1024px' },
      'md': { 'max': '768px' },
      'sm': { 'max': '490px' },
    },
    fontSize: {
      'sm': 'clamp(14px, 1.2vw, 16px)',
      'base': 'clamp(16px, 1.5vw, 20px)',
      'xl': 'clamp(16px, 2.2vw, 24px)',
      '2xl': 'clamp(22px, 2.4vw, 33px)',
      '3xl': 'clamp(36px, 2.4vw, 46px)',
      'red-text': 'clamp(17px, 1.5vw, 27px)'
    }
  },
  plugins: [],
};
export default config;
