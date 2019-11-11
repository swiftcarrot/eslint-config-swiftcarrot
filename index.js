module.exports = {
  parser: 'babel-eslint',

  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
    jquery: true
  },

  extends: ['eslint:recommended', 'plugin:react/recommended'],
  plugins: ['react-hooks'],

  rules: {
    'no-console': 'off',
    'linebreak-style': ['error', 'unix'],
    'react/prop-types': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  },

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      generators: true,
      experimentalObjectRestSpread: true
    }
  }
};
