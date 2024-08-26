/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        color1: '#007dc1',
        colorText_h1: '#230b6b',
        color2: '#0094dc',
        color3: '#78c4f0',
      },
    },
  },
  plugins: [],
}
