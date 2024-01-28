module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "next",
  ],
  rules: {
    // Add custom rules if needed
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
