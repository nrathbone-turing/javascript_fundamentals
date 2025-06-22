import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

// Redid this ESLint config file to enables Mocha globals (`describe`, `it`, `expect`) and only in the test files
// This should also enables `require` and other `Node.js` features in all `.js` files, since the tests set up for browser environments, but i'm not doing it there for this lab,
// i'm using `node.js` and `mocha` based on what was provided with the original lab repo

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
        ...globals.node,
        expect: true,
      },
    },
  },
{
    files: ["**/test/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.mocha,
      },
    },
  }
]);