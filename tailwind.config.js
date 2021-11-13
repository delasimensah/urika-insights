module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#DC2626",
        secondary: "#1D4ED8",
      },
      backgroundImage: {
        "home-bg": "url('/images/home.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  important: true,
};
