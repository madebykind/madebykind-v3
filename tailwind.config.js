// tailwind.config.js
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'media',
  content: [
    './src/js/**/*.*',
    './archetypes/**/*.*',
    './data/**/*.*',
    './layouts/**/*.html',
    './static/**/*.*',
  ],
  theme: {
    colors: {
      currentColor: 'currentColor',
      inherit: 'inherit',
      transparent: 'transparent',
      black: '#011c25',
      indigo: '#084059',
      buff: '#f1ebe8',
      sky: '#b6e0ee',
      orange: '#e85625',
      green: '#08533c',
      teal: '#94cbb8',
      pink: '#ebd6e6',
      claret: '#9b0b36',
      blue: '#265494',
      yellow: '#fdb515',
    },
    extend: {
      fontFamily: {
        display: ['Smithee'],
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        serif: ['Marselis', ...defaultTheme.fontFamily.serif],
      },
    },
    fontSize: { 
      // @link https://utopia.fyi/type/calculator?c=320,16,1.618,1366,24,1.618,5,1,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12
      sm: 'clamp(0.62rem, calc(0.52rem + 0.47vw), 0.93rem)',
      base: 'clamp(1.00rem, calc(0.85rem + 0.76vw), 1.50rem)',
      md: 'clamp(1.62rem, calc(1.37rem + 1.24vw), 2.43rem)',   
      lg: 'clamp(2.62rem, calc(2.22rem + 2.00vw), 3.93rem)',    
      xl: 'clamp(4.24rem, calc(3.59rem + 3.24vw), 6.35rem)', 
      '2xl': 'clamp(6.85rem, calc(5.81rem + 5.24vw), 10.28rem)',  
      '3xl': 'clamp(11.09rem, calc(9.39rem + 8.48vw), 16.63rem)',  
    },
  },
  variants: {
    extend: {
      fontSmoothing: ['dark'],
    }
  }
}
