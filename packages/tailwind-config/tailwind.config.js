//const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    // app content
    `./src/**/*.{tsx,ts,js,jsx}`,
    '../../packages/ui/src/**/*.{ts,tsx,js,jsx}'
    // include packages if not transpiling
    //"../../packages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    },
  },
  plugins: [],
  safelist: [
    'bg-emerald-200',
    "bg-emerald-500",
    "bg-emerald-400",
    "bg-emerald-300",
    "bg-zinc-300",
    "bg-zinc-200",
    "bg-blue-300",
    "bg-blue-400",
    "bg-blue-500",
    "bg-blue-200",
  ]
};
