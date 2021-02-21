const { colors: defaultColors } = require('tailwindcss/defaultTheme')

const colors = {
  ...defaultColors,
  muted: {
    light: "#F8F6F2",
    DEFAULT: "#F3F0E7",
    dark: "#E4E4DD",
    darkest: "#b5b5a6"
  },
  warm: {
    dark:"#171717",
    medium:"#525252",
    light:"#a3a3a3"
  }
}

module.exports = {
  purge: ['./src/**/*.njk', './src/**/*.md'],
  theme: {  
    colors: colors,
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      mono: ['Space Mono', 'monospace'],
    }        
  },
  variants: {},
  plugins: [],
};
