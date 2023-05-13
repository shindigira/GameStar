/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {},
      backgroundImage: (theme) => ({
        "carbon-fiber":
          "radial-gradient(circle at center center, rgba(33,33,33,0),rgb(33,33,33)),repeating-linear-gradient(135deg, rgb(33,33,33) 0px, rgb(33,33,33) 1px,transparent 1px, transparent 4px),repeating-linear-gradient(45deg, rgb(56,56,56) 0px, rgb(56,56,56) 5px,transparent 5px, transparent 6px),linear-gradient(90deg, rgb(33,33,33),rgb(33,33,33))",
        "carbon-fiber-2":
          "radial-gradient(circle at center center, transparent,rgb(33,33,33)),repeating-linear-gradient(135deg, rgb(33,33,33) 0px, rgb(33,33,33) 2px,transparent 2px, transparent 10px,rgb(33,33,33) 10px, rgb(33,33,33) 11px,transparent 11px, transparent 21px),repeating-linear-gradient(45deg, rgb(47,47,47) 0px, rgb(47,47,47) 4px,transparent 4px, transparent 8px),linear-gradient(90deg, rgb(33,33,33),rgb(33,33,33))",
      }),
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      content: {},
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
      tablet: "640px",
      // => @media (min-width: 640px) { ... }
      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }
      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};
