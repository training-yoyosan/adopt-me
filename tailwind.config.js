module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    opacity: ({ after }) => after(["disabled"]),
    // extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
