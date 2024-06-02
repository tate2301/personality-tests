import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  /**
   * Provide the path to your Next.js app to load
   * next.config.js and .env files in your test environment
   */
  dir: "./",
});

const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^@/components/(.*)$": "<rootDir>/components/$1",
    "^@/lib/(.*)$": "<rootDir>/lib/$1",
    "^@/styles/(.*)$": "<rootDir>/styles/$1",
  },
  preset: "ts-jest",
};

export default createJestConfig(config);
