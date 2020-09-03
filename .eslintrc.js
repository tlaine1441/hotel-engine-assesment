module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "import/prefer-default-export": "off",
    "no-use-before-define": "off",
    "no-param-reassign": "off",
    "react/jsx-filename-extension": "off",
    "no-underscore-dangle": "off"
  },
};
