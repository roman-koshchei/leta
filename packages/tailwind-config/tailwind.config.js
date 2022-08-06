const colors = require("tailwindcss/colors");

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
      colors: {
        brandblue: colors.blue[500],
        brandred: colors.red[500],
      },
    },
  },
  plugins: [],
};
