  /** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{vue,js,ts}', // Include your page components
    './components/**/*.{vue,js,ts}', // Include your reusable components
    './layouts/**/*.{vue,js,ts}', // Include layouts
    './app.vue', // Include app.vue (if used)
  ],
  theme: {
    extend: {},
  },
  theme: {
    extend: {
      fontFamily: {
        serif: ['Sentient'], // Fallback to serif if Sentient is unavailable
        sans: ['Satoshi'], // Fallback to sans-serif if Satoshi is unavailable
        display: ['Work Sans'], // Work Sans for font-display
        mono: ['JetBrains Mono'], // JetBrains Mono for font-mono
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};