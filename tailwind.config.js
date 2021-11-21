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
        'tl': '888px',
        'sm': '680px',
      },
      colors: {
        // Material palette.
        "material-50": "#FAFAFA",
        "material-100": "#F5F5F5",
        "material-200": "#EEEEEE",
        "material-300": "#E0E0E0",
        "material-400": "#BDBDBD",
        "material-500": "#9E9E9E",
        "material-600": "#757575",
        "material-700": "#616161",
        "material-800": "#424242",
        "material-900": "#212121",

        // Colores más oscuros para el dark mode.
        "gray-750":"#263242",
        "gray-850":"#192338",
        "gray-950":"#0c111c",
        "gray-1000":"#0b101a"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
