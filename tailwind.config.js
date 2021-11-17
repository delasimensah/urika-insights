module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#f60001",
        secondary: "#1e3c8c",
      },
      backgroundImage: {
        "home-bg": "url('/images/articles.jpg')",
        "about-bg": "url('/images/about.jpg')",
        "team-bg": "url('/images/team.jpg')",
        "research-bg": "url('/images/research.jpg')",
        "services-bg": "url('/images/services2.jpg')",
        "articles-bg": "url('/images/home.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  important: true,
};
