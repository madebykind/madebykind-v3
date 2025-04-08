// tailwind.config.js
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './archetypes/**/*.*',
    './content/**/*.*',
    './data/**/*.*',
    './layouts/**/*.*',
    './layouts/partials/**/*.*',
    './src/js/**/*.*',
    './static/**/*.*',
  ],
  corePlugins: {
    container: false,
  },
  darkMode: 'media',
  theme: {
    colors: {
      currentColor: 'currentColor',
      inherit: 'inherit',
      transparent: 'transparent',
      
      blue: '#104e93', // was #265494
      black: '#011c25',
      buff: '#f1ebe8',
      claret: '#9b0b36',
      green: '#08533c',
      'bright-green': '#006042',
      indigo: '#084059',
      orange: '#e85625',
      pink: '#ebd6e6',
      sky: '#b6e0ee',
      teal: '#94cbb8',
      white: '#fff',
      yellow: '#fdb515',
    },
    extend: {
      screens: {
        '3xl': '1800px',
      },
      aspectRatio: {
        '3/4': '3 / 4',
        '4/3': '4 / 3',
        '9/16': '9 / 16',
        'ipad': '3 / 4.5',
        'iphone': '9 / 19.5',
      },
      borderWidth: {
        3: '3px',
      },
      fontFamily: {
        display: ['Smithee'],
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        serif: ['Marselis', ...defaultTheme.fontFamily.serif],
      },
      height: {
        '2px': '2px',
        'iphone': '712px',
        'ipad': '810px',
      },
      lineHeight: {
        'heading': '0.8',
      },
      maxHeight: {
        'illustration': '55rem',
        'iphone': '834px',
        'ipad': '810px',
      },
      maxWidth: {
        'cta-copy': '45ch',
        'illustration': '55rem',
        'iphone': '404px',
        'ipad': '1080px',
      },
      minHeight: {
        '90vh': '90vh',
        'dynamic-screen': '100dvh',
      },
      spacing: {
        '7.5': '1.875rem',
        '15': '3.75rem',
        '30': '7.5rem',
      },
      width: {
        'iphone': '400px',
        'ipad': '1080px',
        '160': '40rem',
        '240': '60rem',
      },
      transitionTimingFunction: {
        'bounce': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      },
      transitionDelay: {
        '50': '50ms',
        '250': '250ms',
        '350': '350ms',
        '400': '400ms',
        '450': '450ms',
        '550': '550ms',
        '600': '600ms',
      }
    },
    fontSize: {
      /* @link https://utopia.fyi/type/calculator?c=375,18,1.333,1860,24,1.333,8,2,1728&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12 */

      /* Step -2: 10.1301px → 13.5068px */
      "xs": "clamp(0.6331rem, 0.5798rem + 0.2274vw, 0.8442rem)",
      /* Step -1: 13.5034px → 18.0045px */
      "sm": "clamp(0.844rem, 0.7729rem + 0.3031vw, 1.1253rem)",
      /* Step 0: 18px → 24px */
      "base": "clamp(1.125rem, 1.0303rem + 0.404vw, 1.5rem)",
      /* Step 1: 23.994px → 31.992px */
      "md": "clamp(1.4996rem, 1.3734rem + 0.5386vw, 1.9995rem)",
      /* Step 2: 31.984px → 42.6453px */
      "lg": "clamp(1.999rem, 1.8307rem + 0.7179vw, 2.6653rem)",
      /* Step 3: 42.6347px → 56.8462px */
      "xl": "clamp(2.6647rem, 2.4404rem + 0.957vw, 3.5529rem)",
      /* Step 4: 56.832px → 75.776px */
      "2xl": "clamp(3.552rem, 3.253rem + 1.2757vw, 4.736rem)",
      /* Step 5: 75.7571px → 101.0094px */
      "3xl": "clamp(4.7348rem, 4.3363rem + 1.7005vw, 6.3131rem)",
      /* Step 6: 100.9842px → 134.6456px */
      "4xl": "clamp(6.3115rem, 5.7802rem + 2.2668vw, 8.4153rem)",
      /* Step 7: 134.6119px → 179.4826px */
      "5xl": "clamp(8.4132rem, 7.7051rem + 3.0216vw, 11.2177rem)",
      /* Step 8: 179.4377px → 239.2503px */
      "6xl": "clamp(11.2149rem, 10.2708rem + 4.0278vw, 14.9531rem)",

    },
  },
  variants: {
    extend: {
      fontSmoothing: ['dark'],
    }
  }
}
