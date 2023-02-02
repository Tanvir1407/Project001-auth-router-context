/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
      themes: [
        {
          mytheme: {
          
 "primary": "#1e3a8a",
          
 "secondary": "#b58bd6",
          
 "accent": "#f484af",
          
 "neutral": "#242D33",
          
 "base-100": "#27304F",
          
 "info": "#91B1F8",
          
 "success": "#4FDEA0",
          
 "warning": "#F8BD1B",
          
 "error": "#EF2A6B",
          },
        },
      ],
    },
  plugins: [require("daisyui")],
}
