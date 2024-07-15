/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

        keyframes: {
            custompulselight: {
                '0%': { opacity: 0 },
                '50%': { opacity: 0.10 },
                '100%': { opacity: 0 }
            },
            custompulsestrong: {
                '0%': { opacity: 0 },
                '50%': { opacity: 0.05 },
                '100%': { opacity: 0 }
            },
        },


        animation: {
            'custompulselight': 'custompulselight 2s linear infinite',
            'custompulsestrong': 'custompulsestrong 2s linear infinite',
        },


    },
  },
  plugins: [],
}

