const path = require('path');

module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ['react', '@typescript-eslint'],
  globals: {
    // https://github.com/sindresorhus/globals/issues/82
    fetch: true,
    Response: true,
    window: true,
    document: true,
    navigator: true,
  },
  env: {
    jest: true,
    // https://github.com/sindresorhus/globals/issues/82
    // react-native: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    'plugin:react/recommended',
    'airbnb-base',
  ],
  rules: {
    'prettier/prettier': 0,
    'jsx-quotes': ['error', 'prefer-double'],
    '@typescript-eslint/no-unused-vars': 2,
    '@typescript-eslint/explicit-member-accessibility': 2,
    '@typescript-eslint/no-explicit-any': [0, 'always'],
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
      },
    ],
    'import/no-extraneous-dependencies': [
      2,
      {
        devDependencies: ['**/*.test.ts', '**/*.test.tsx', './jest-setup/**'],
        packageDir: path.join(__dirname),
      },
    ],
    'react/destructuring-assignment': 2,
    'react/prop-types': 0,
    'import/no-default-export': 2,
    'import/prefer-default-export': 0,
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    'class-methods-use-this': [
      2,
      {
        exceptMethods: ['render'],
      },
    ],
    'arrow-body-style': [0, 'as-needed'],
    'object-curly-spacing': [2, 'always'],
    'object-curly-newline': [0, 'as-needed'],
    'arrow-parens': [2, 'always'],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {},
    },
  },
};