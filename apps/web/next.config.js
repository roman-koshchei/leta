const withTM = require("next-transpile-modules")(["models"]);

module.exports = withTM({
  reactStrictMode: true,
});
