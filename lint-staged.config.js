module.exports = {
  "*.{js,jsx}": [() => "yarn lint"],
  "*.{ts,tsx}": [() => "yarn lint", () => "yarn validate"],
  "{*.json,.{babelrc,eslintrc,prettierrc}}": [
    "prettier --config .prettierrc.js --ignore-path .eslintignore --parser json --write",
  ],
  "*.{css,scss,less}": ["prettier --config .prettierrc.js --ignore-path .eslintignore --write"],
  "*.{html,md,yml}": ["prettier --config .prettierrc.js --ignore-path .eslintignore --write"],
};
