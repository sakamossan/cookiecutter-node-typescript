module.exports = {
  verbose: true,
  roots: ["<rootDir>/src"],
  testRegex: "test.[jt]sx?$",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
};
