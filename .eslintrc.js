module.exports = {
  env: {
    node: true, 
    es2021: true
  },
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: [
    '@typescript-eslint',
    'jsx-a11y',
    'react-hooks'
  ],
  rules: {
    'prettier/prettier': ['error'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off'
  }
};
