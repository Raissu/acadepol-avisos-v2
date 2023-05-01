/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        loader: "loader 5s linear infinite",
      },
      keyframes: {
        loader: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      gradientColorStops: (theme) => ({
        gradient:
          "linear-gradient(180deg, rgba(0, 0, 0, 0.97) 52.08%, #E5A43A 99.99%, #E5A43A 100%)",
      }),
    },
  },
  plugins: [],
};
