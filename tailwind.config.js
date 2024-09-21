/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '200px',
      },
      colors: {
        "primary-color": "#004010",
        "primary-text-color": "#8a8e8b",
        "text-color-900": "#001606",
      },
    },
  },
  plugins: [],
};
