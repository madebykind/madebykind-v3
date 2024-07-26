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
      
      blue: '#265494',
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
      },
      transitionTimingFunction: {
        'bounce': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      },
    },
    fontSize: {
      /* @link https://utopia.fyi/type/calculator?c=375,18,1.333,1366,24,1.333,8,2,768-1024-1280&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12 */
      
      /* Step -2: 10.13px → 13.51px */
      "xs": "clamp(0.6331rem, 0.5532rem + 0.3411vw, 0.8444rem)",
      
      /* Step -1: 13.50px → 18.00px */
      "sm": "clamp(0.8438rem, 0.7373rem + 0.4541vw, 1.125rem)",
      
      /* Step 0: 18.00px → 24.00px */
      "base": "clamp(1.125rem, 0.9831rem + 0.6054vw, 1.5rem)",
      
      /* Step 1: 23.99px → 31.99px */
      "md": "clamp(1.4994rem, 1.3102rem + 0.8073vw, 1.9994rem)",
      
      /* Step 2: 31.98px → 42.65px */
      "lg": "clamp(1.9988rem, 1.7464rem + 1.0767vw, 2.6656rem)",
      
      /* Step 3: 42.63px → 56.85px */
      "xl": "clamp(2.6644rem, 2.3281rem + 1.4349vw, 3.5531rem)",
      
      /* Step 4: 56.83px → 75.78px */
      "2xl": "clamp(3.5519rem, 3.1037rem + 1.9122vw, 4.7363rem)",
      
      /* Step 5: 75.76px → 101.01px */
      "3xl": "clamp(4.735rem, 4.1378rem + 2.5479vw, 6.3131rem)",
      
      /* Step 6: 100.98px → 134.65px */
      "4xl": "clamp(6.3113rem, 5.5149rem + 3.3976vw, 8.4156rem)",
      
      /* Step 7: 134.61px → 179.48px */
      "5xl": "clamp(8.4131rem, 6.3519rem + 4.5277vw, 10.7175rem)",
      
      /* Step 8: 179.44px → 239.25px */
      "6xl": "clamp(11.215rem, 9.8005rem + 6.0353vw, 14.9531rem)",
    },
  },
  safelist: [
    'xl:col-start-5',
  ],
  variants: {
    extend: {
      fontSmoothing: ['dark'],
    }
  }
}
