/**
 * Professional ESLint Configuration for React (Vite/ESM Compliant)
 * Enforces best practices for React Hooks and integration with Prettier.
 */
module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier', // Disables ESLint rules that conflict with Prettier
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: 'detect' } },
  plugins: ['react-refresh'],
  rules: {
    // Disable prop-types validation as it's often not used in modern TS/Vite projects
    'react/prop-types': 'off', 
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
  },
};