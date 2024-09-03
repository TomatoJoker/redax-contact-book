/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        sm: '14px',
        base: '18px',
        xl: '22px'
      },
      extend: {
        lineHeight: {
          'normal': '1.2',
        }
      },
      container: {
        padding: '16px',
        center: true
      },
    },
  },
  plugins: [],
}

