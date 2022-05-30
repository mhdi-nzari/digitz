const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    fontSize: {
      title: "2.4rem",
      20: "2.0rem",
      19: "1.9rem",
      18: "1.8rem",
      17: "1.7rem",
      16: "1.6rem",
      15: "1.5rem",
      18: "1.8rem",
      one: "1.6rem",
    },

    // screens: {
    //   xs: "320px",
    //   ...defaultTheme.screens,

    //   sm: "480px",
    //   // => @media (min-width: 640px) { ... }

    //   md: "768px",
    //   // => @media (min-width: 1024px) { ... }

    //   lg: "1024px",
    //   // => @media (min-width: 1280px) { ... }
    //   xl: "1280",
    //   // => @media (min-width: 1280px) { ... }
    // },

    // borderRadius: {
    //   filter: "15px",
    // },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),

    {
      tailwindcss: {},
      autoprefixer: {},
      ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
    },
  ],
};
