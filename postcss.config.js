module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-nesting"),
    require("postcss-url")({
      url: "rebase", // adjusts URLs to be relative to output CSS location
    }),
    require("cssnano")({ preset: "default" }),
  ],
}
