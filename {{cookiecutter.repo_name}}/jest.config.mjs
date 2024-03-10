const esmRequireedNpmPackages = [
  "query-string",
  "decode-uri-component",
  "split-on-first",
  "filter-obj",
  "jest-canvas-mock",
].join("|");

const esmTsJest = [
  "ts-jest",
  {
    useESM: true,
    tsconfig: "tsconfig.test.json",
  },
];

/** @type {import('@jest/types').Config.InitialOptions} */
export default {
  preset: "ts-jest/presets/default-esm",
  verbose: true,
  roots: ["<rootDir>/src"],
  testRegex: "\\.test\\.[jt]sx?$",

  extensionsToTreatAsEsm: [".ts", ".tsx"],
  // for @sindresorhusa software
  transformIgnorePatterns: [`/node_modules/(?!(${esmRequireedNpmPackages})/)`],
  transform: {
    [`node_modules/(${esmRequireedNpmPackages})/.+.(j|t)sx?$`]: esmTsJest,
    "^.+\\.(ts|tsx)$": esmTsJest,
  },
};
