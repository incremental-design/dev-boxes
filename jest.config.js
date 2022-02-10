/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  projects: ["<rootDir>/packages/*"],
  testMatch: ["<rootDir>/packages/*/*.test.ts"]
};
