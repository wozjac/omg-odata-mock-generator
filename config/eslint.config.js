import globals from "globals";
import js from "@eslint/js";

export default [
  {
    ignores: ["node_modules/**", "dist/**", "coverage/**"],
  },
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      globals: {
        ...globals.browser,
        ...globals.commonjs,
        ...globals.jquery,
        ...globals.mocha,
      },
      sourceType: "module",
    },
    rules: {
      quotes: ["error", "double"],
      semi: ["error", "always"],
    },
  },
];
