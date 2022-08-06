const withTM = require("next-transpile-modules")(["models", "ui"]);

module.exports = withTM({
  reactStrictMode: true,
});
