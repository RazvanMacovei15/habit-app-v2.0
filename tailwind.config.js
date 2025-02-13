/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        "manrope-regular": ["Manrope", "sans-serif"],
        "manrope-medium": ["Manrope-Medium", "sans-serif"],
        "manrope-semibold": ["Manrope-SemiBold", "sans-serif"],
        "manrope-bold": ["Manrope-Bold", "sans-serif"],
        "manrope-extrabold": ["Manrope-ExtraBold", "sans-serif"],
        "manrope-light": ["Manrope-Light", "sans-serif"],
        "manrope-extralight": ["Manrope-ExtraLight", "sans-serif"],
      },
      colors: {
        primary: {
          100: "#6AB0E30A",
          200: "#6AB0E31A",
          300: "#6AB0E3",
        },
        accent: {
          100: "#FBFBFD",
        },
        black: {
          DEFAULT: "#000000",
          100: "#8C8E98",
          200: "#666876",
          300: "#191d31",
        },
        danger: {
          DEFAULT: "#F75555",
        },
      },
    },
  },
  plugins: [],
};
