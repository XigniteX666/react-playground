module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: { "^.+\\.tsx$": "ts-jest", "^.+\\.ts$": "ts-jest" },
  transformIgnorePattern: ["<rootDir>/node_modules/(?:axios)/"],
  moduleNameMapper: {
    "^axios$": require.resolve("axios"),
  },
};
