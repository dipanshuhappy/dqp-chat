import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  themes: [
    {
      mytheme: {
        primary: "#1F1F1F",

        secondary: "#2C2C2C",

        accent: "#1ABC9C",

        neutral: "#7F8C8D",

        "base-100": "#F0F0F0",

        info: "#3498DB",

        success: "#2ECC71",

        warning: "#F1C40F",

        error: "#E74C3C",
      },
    },
  ],
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
} satisfies Config;
