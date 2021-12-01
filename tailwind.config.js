/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require('tailwindcss/defaultTheme')
const defaultColor = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin');
const defaultConfig = require('tailwindcss/defaultConfig');
const {
  default: prefixNegativeModifiers
} = require('tailwindcss/lib/util/prefixNegativeModifiers');
const map = require('lodash/map');

module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    options: {
      safelist: ['dark'] //specific classes
    }
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'bounce-slow': 'bounce-short 1s linear infinite ',
        'flip': 'flip 1s linear',
       },
       keyframes: {
        'bounce-short': {
          '0%, 100%': {
            transform: 'translateY(-5%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            transform: 'translateY(0)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)'
           },
        },
        'flip': {
          from:{
            transform: 'rotateY(0deg)'
          },
          to: {
            transform: 'rotateY(180deg)'
          }
        }
       },
      fontFamily: {
        sans: ['Inter', 'Clarity City', ...defaultTheme.fontFamily.sans],
        slab: ['Sriracha', ...defaultTheme.fontFamily.sans]
      },
      screens: {
        standalone: { raw: '(display-mode: standalone)' }
      },
      colors: {
        cyan: defaultColor.cyan,
        primary: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A'
        },
        secondary: {
          50: '#5f5a70',
          100: '#555066',
          200: '#4b465c',
          300: '#413c52',
          400: '#373248',
          500: '#2d283e',
          600: '#231e34',
          700: '#19142a',
          800: '#0f0a20',
          900: '#050016'
        },
        accent: {
          50: '#8881a1',
          100: '#7e7797',
          200: '#746d8d',
          300: '#6a6383',
          400: '#605979',
          500: '#564f6f',
          600: '#4c4565',
          700: '#423b5b',
          800: '#383151',
          900: '#2e2747'
        },
        light: {
          50: '#ffffff',
          100: '#f9ffff',
          200: '#eff5fe',
          300: '#e5ebf4',
          400: '#dbe1ea',
          500: '#d1d7e0',
          600: '#c7cdd6',
          700: '#bdc3cc',
          800: '#b3b9c2',
          900: '#a9afb8'
        }
      },
      typography: (theme) => ({
        default: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: theme('colors.primary.600')
              }
            }
          }
        }
      })
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    // Additional first-party plugins
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),

  ]
}
