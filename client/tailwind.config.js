/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        ECorp: {
          primary: "#0F0F0F",
          secondary: "#2563eb",
          background: "#181818",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#0F0F0F",
          "base-200": "#1c1c1c",
          "base-300": "#2a2a2a",
        },
      },
    ],
  },

}
