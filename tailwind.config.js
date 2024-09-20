/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // text-[#8a8e8b]
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      },
      colors: {
        "primary-color": "#004010",
        "text-color-900": "#001606",
        "error-color": "#FF3838",
      },
    },
  },
  plugins: [],
};
