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
        serif: ['Sentient', 'serif'], // Fallback to serif if Sentient is unavailable
        sans: ['Satoshi', 'sans-serif'], // Fallback to sans-serif if Satoshi is unavailable
        display: ['Work Sans', 'sans-serif'], // Work Sans for font-display
        mono: ['JetBrains Mono', 'monospace'], // JetBrains Mono for font-mono
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};