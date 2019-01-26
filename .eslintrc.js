module.exports = {
  env: { browser: true, es6: true },
  // "extends": "eslint:recommended",
  extends: ["react-app", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    "linebreak-style": ["error", "unix"],
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "prettier/prettier": "warn",
    quotes: ["error", "single"]
  }
};
