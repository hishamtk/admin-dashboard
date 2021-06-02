// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: {
        50: "#fefffe",
        150: "#f9f8fb",
        250: " #e5d4f3",
        350: "#677080",
        450: "#f6f6f7",
      },

      blue: {
        150: "#c5acda",
        250: "#cbd0d7",
        350: "#825da3",
        450: "rgba(108,98,154,255)",
        550: "rgba(168,73,211,255)",
        650: "#5e5399",
        750: "#ad4ad6",
        850: "#8c51aa",
      },
      green: {
        150: "#5df255",
      },
    },
    extend: {
      zIndex: {
        "-10": "-10",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
