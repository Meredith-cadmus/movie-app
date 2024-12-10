/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true, // Centers the container by default
        padding: {
          // Default padding for all screen sizes
          sm: "2rem", // Small screens
          lg: "4rem", // Large screens
          xl: "6rem", // Extra large screens
        },
      },
    },
    darkMode: "class",
    plugins: [],
  },
};
