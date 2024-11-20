import { iconsPlugin, getIconCollections } from "@egoist/tailwindcss-icons"

/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html",
    "./src/**/*{js,jsx}",
    "./src/App"
  ],
  "darkMode": "class",
  theme: {
    extend: {
      colors: {
        customColor: '#213547'
      },
      boxShadow: {
        'custom-blue': '0 4px 6px -1px rgba(99, 102, 241, 0.4), 0 2px 4px -1px rgba(99, 102, 241, 0.4)',
      },
    },
  },
  plugins: [
    iconsPlugin({
      collections: getIconCollections("all"),
    }),
  ],
}

