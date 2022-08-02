module.exports = {
    settings: {
      react: {
        version: 'detect',
      },
    },
    env: {
      browser: true,
      es2020: true,
      node: true,
      jest: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: 'module',
    },
    plugins: ['react', 'react-hooks', '@typescript-eslint'],
    rules: {
      'react/prop-types': 'off',
      'react/display-name': 'off',
      'react/no-unescaped-entities': 'off',
      'react/jsx-no-target-blank': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-var-requires': 'off',
    },
  };
  