const withTM = require("next-transpile-modules")(["models", "utils", "ui"]);

module.exports = withTM({
  reactStrictMode: true,
});
