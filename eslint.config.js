/** @type {import("eslint").Linter.Config} */
export default {
  root: true,
  extends: [
    "eslint:recommended",
    "prettier",
    require.resolve("@vercel/style-guide/eslint/next"),
    "eslint-config-turbo",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    node: true,
    browser: true,
  },
  plugins: ["only-warn"],
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: [
    // Ignore dotfiles
    ".*.js",
    "node_modules/",
  ],
  rules: {
    curly: ["error", "all"],
    quotes: ["error", "single"],
    semi: ["error", "never"],
    "no-debugger": ["error"],
    "no-cond-assign": ["error"],
    "no-constant-condition": ["error"],
    "no-unreachable": ["error"],
    "no-unused-expressions": ["error"],
    "no-constant-binary-expression": ["error"],
    "no-sequences": ["error"],
    "no-empty": ["warn", { allowEmptyCatch: true }],
    "no-process-exit": "off",
    "no-useless-escape": "off",
    "prefer-const": [
      "warn",
      {
        destructuring: "all",
      },
    ],
    "@typescript-eslint/ban-types": [
      "error",
      {
        types: {
          Function: false,
          "{}": false,
        },
      },
    ],
    "sort-imports": 0,
    "import/order": [2, { alphabetize: { order: "asc" } }],
    "node/no-missing-import": "off",
    "node/no-missing-require": "off",
    "node/no-deprecated-api": "off",
    "node/no-unpublished-import": "off",
    "node/no-unpublished-require": "off",
    "node/no-unsupported-features/es-syntax": "off",
    "@typescript-eslint/no-empty-function": [
      "error",
      { allow: ["arrowFunctions"] },
    ],
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/consistent-type-imports": [
      "error",
      { prefer: "type-imports" },
    ],
  },
  overrides: [{ files: ["*.js?(x)", "*.ts?(x)"] }],
  tailwindcss: {
    callees: ["cn", "cva"],
    config: "tailwind.config.ts",
  },
}
