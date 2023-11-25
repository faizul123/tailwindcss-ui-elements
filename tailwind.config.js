/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      "colors": {
        "primary": "#f1f3f4"
      }
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
}

