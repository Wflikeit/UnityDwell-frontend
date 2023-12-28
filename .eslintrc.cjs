module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  plugins: ['@typescript-eslint', 'react-hooks', 'unused-imports'],
  rules: {
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.jsx', '.tsx'] },
    ],
    "react/react-in-jsx-scope": "off",
    'react/no-unused-prop-types': 'off',
    'react/no-unescaped-entities': ['off', { allowHTML: true }],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        args: 'after-used',
        ignoreRestSiblings: true,
        caughtErrors: 'none',
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-declarations': 'off',
  },
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
}
