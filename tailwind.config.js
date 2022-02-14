module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens: {
      'sm': { 'max': '768px' },
      // => @media (max-width: 767px) { ... }
      'md': { 'min': '769px' , 'max': '1279px' }
      // => @media (max-width: 1279px) { ... }
  },
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
