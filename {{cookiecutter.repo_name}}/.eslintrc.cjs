/**
 * @type {import('eslint').ESLint.Options}
 */
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  env: {
    es2021: true,
    node: true,
  },
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
  },
  ignorePatterns: ["jest.config.js", ".eslintrc.js", "/dist"],
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
  },
};
