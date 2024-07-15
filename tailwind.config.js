/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

        keyframes: {
            custompulse: {
                '0%': { opacity: 0 },
                '50%': { opacity: 0.05 },
                '100%': { opacity: 0 }
            },
        },


        animation: {
            'custompulse': 'custompulse 2s linear infinite',
        },


    },
  },
  plugins: [],
}

