module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
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
