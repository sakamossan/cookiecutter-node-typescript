/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  plugins: ["@ianvs/prettier-plugin-sort-imports"],
  importOrder: [
    "<TYPES>",
    "<BUILTIN_MODULES>",
    "<THIRD_PARTY_MODULES>",
    "^[./]",
  ],
};

export default config;
