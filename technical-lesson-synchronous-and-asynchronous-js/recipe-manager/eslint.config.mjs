import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        ...globals.node, // apply Node.js globals to everything
      },
    },
  },
  {
    files: [
      "**/test/**/*.js",
      "**/spec/**/*.js",
      "**/__tests__/**/*.js",
      "**/*.test.js",
      "**/*.spec.js",
    ],
    languageOptions: {
      globals: {
        ...globals.node,   // ← include Node.js here
        ...globals.jest,   // ← and Jest globals like `test`, `expect`
      },
    },
  },
]);