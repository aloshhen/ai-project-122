export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#f5f3f0',
          100: '#e6dfd4',
          200: '#d4c4b0',
          300: '#c2a98c',
          400: '#b08e69',
          500: '#9e7345',
          600: '#7f5c37',
          700: '#604529',
          800: '#412e1b',
          900: '#22170e'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
}