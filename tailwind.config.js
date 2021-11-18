module.exports = {
  mode: "jit", // Build más rápido
  purge: ["./Template/*.html"], // Quita lo que no usamos
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        "8xl": ["6.5rem", { lineHeight: "1" }],
      },
      screens: {
        "3xl": "1600px",
        'lg': '1080px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
