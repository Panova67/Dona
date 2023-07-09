/** @type {import('tailwindcss').Config} */
export default {
  // important: true,
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'blue-one': 'rgba(9, 41, 90, 1)',
        'blue-two': 'rgba(10, 37, 78, 1)',
        'blue-three': 'rgba(18, 49, 114, 1)',
        
        'sky-one': 'rgba(227, 246, 255, 1)',
        'sky-two': 'rgba(218, 238, 249, 1)',
      },
      backgroundImage: {
        // 'grad-one': 'linear-gradient(360deg, #E4F3FB 0.28%, #A8D9F7 94.72%)',
        // 'grad-one': "linear-gradient(bottom, rgba('#E4F3FB', 0.28), rgba('#A8D9F7', 94.72))",
        // 'grad-two': 'linear-gradient(138.34deg, #EEF8FE 10.48%, #E0F5FF 88.44%)',
        'bcg-one': "url('image/background-1.svg')",
        'bcg-two': "url('image/background-2.svg')",
      },
    },
  },
  plugins: [],
}
