/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "#dbac2c",
        "yellow-light": "#f1e9c9",
        "yellow-dark": "#c47f17",

        purple: "#8047f8",
        "purple-light": "#ebe5f9",
        "purple-dark": "#4b2995",

        "base-title": "#272221",
        "base-subtitle": "#403937",
        "base-text": "#574f4d",
        "base-label": "#8d8686",
        "base-hover": "#d7d5d5",
        "base-button": "#e6e5e5",
        "base-input": "#ededed",
        "base-card": "#f3f2f2",
        background: "#fafafa",
        white: "#ffffff",
      },
      fontFamily: {
        baloo: ['"Baloo 2"', "cursive"],
        roboto: ["Roboto", "Roboto-mono"],
      },
      maxWidth: {
        1440: "90rem",
      },
      width: {
        1440: "90rem",
      },
      height: {
        31.125: "31.125rem",
        "1px": "1px",
      },
      borderWidth: {
        "1px": "1px",
      },
    },
  },
  plugins: [],
};
