/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#edf9fc",          // page background
        primary: "#1d4f6b",     // main teal
        accent: "#bde6f7",      // pale accent
        "accent-2": "#d4f0f8",
      },
      fontFamily: {
        serifDisplay: ['"Playfair Display"', "serif"],
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px rgba(13,52,62,0.06)",
        card: "0 8px 20px rgba(29,79,107,0.06)",
        lift: "0 12px 40px rgba(29,79,107,0.12)",
      },
      spacing: {
        "content-max": "1120px",
      },
      borderRadius: {
        "xl-2": "28px",
      },
      fontSize: {
        "giant": "6.5rem",
      },
    },
  },
  plugins: [],
};
