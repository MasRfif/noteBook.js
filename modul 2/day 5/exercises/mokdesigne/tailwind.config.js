/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        //primary

        "Dark cyan": "hsl(158, 36%, 37%)",
        Cream: "hsl(30, 38%, 92%)",

        //nuertal

        "Very dark blue": "hsl(212, 21%, 14%)",
        "Dark grayish blue": "hsl(228, 12%, 48%)",
        White: "hsl(0, 0%, 100%)",
      },

      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Fraunces: ["Fraunces", "sans-serif"],
      },
      fontsize: {
        "14px": "24px",
      },
    },
  },
  plugins: [],
};
