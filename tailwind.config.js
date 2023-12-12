const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
      nextui({
          themes: {
              light: {
                  colors: {
                      background: "#FFFFFF",
                      primary: {
                          DEFAULT: "#13ACC4",
                          foreground: "#ECEDEE"
                      },
                      secondary: {
                          DEFAULT: "#1F394C",
                          foreground: "#ECEDEE"
                      },
                      focus: "#13ACC4",
                  }
              }
          }
      })
  ]
}