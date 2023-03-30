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
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        serif: ['Fraunces', ...defaultTheme.fontFamily.serif],
      },
    },
    fontSize: { 
      // @link https://utopia.fyi/type/calculator/?c=320,16,1.2,1920,24,1.333,7,1,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l
      sm: 'clamp(0.83rem, calc(0.77rem + 0.29vw), 1.13rem)',
      base: 'clamp(1.00rem, calc(0.90rem + 0.50vw), 1.50rem)',
      md: 'clamp(1.20rem, calc(1.04rem + 0.80vw), 2.00rem)',   
      lg: 'clamp(1.44rem, calc(1.19rem + 1.23vw), 2.67rem)',    
      xl: 'clamp(1.73rem, calc(1.36rem + 1.83vw), 3.55rem)',    
      '2xl': 'clamp(2.07rem, calc(1.54rem + 2.66vw), 4.74rem)', 
      '3xl': 'clamp(2.49rem, calc(1.72rem + 3.83vw), 6.31rem)',  
      '4xl': 'clamp(2.99rem, calc(1.90rem + 5.43vw), 8.42rem)',  
      '5xl': 'clamp(3.58rem, calc(2.06rem + 7.63vw), 11.22rem)',
    },
  },
  variants: {
    extend: {
      fontSmoothing: ['dark'],
    }
  }
}
