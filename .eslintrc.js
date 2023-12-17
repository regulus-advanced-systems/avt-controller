module.exports = {
  env: { es6: true },
  extends: ['next/core-web-vitals'],
  plugins: ['eslint-plugin-prettier', 'eslint-plugin-import', 'unused-imports'],
  rules: {
    'react-hooks/exhaustive-deps': 'off',
    'no-unused-vars': 'off',
    'no-undef': 'error',
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': [
      'warn',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
    ],
  },
};
