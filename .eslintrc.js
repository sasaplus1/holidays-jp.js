module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:node/recommended', 'prettier'],
  overrides: [
    {
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:node/recommended-module',
        'prettier'
      ],
      files: ['**/*.ts'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      settings: {
        node: {
          tryExtensions: ['.ts', '.js', '.json', '.node']
        }
      }
    },
    {
      extends: [
        'eslint:recommended',
        'plugin:node/recommended-module',
        'prettier'
      ],
      files: ['rollup.config.js']
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  root: true
};
