/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vertex: {
          bg: '#0A0A0A',
          primary: '#00FF41',
          secondary: '#1A1A1A',
          highlight: '#39FF14',
          text: '#E5E5E5',
          muted: '#888888',
        }
      },
      fontFamily: {
        mono: ['"Fira Code"', 'Monaco', 'Consolas', 'monospace'],
      },
      animation: {
        'cursor-blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}