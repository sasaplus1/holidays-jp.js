module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    'plugin:prettier/recommended'
  ],
  overrides: [
    {
      extends: [
        'eslint:recommended',
        'plugin:node/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'prettier/@typescript-eslint'
      ],
      files: ['**/*.ts'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      rules: {
        'node/no-unsupported-features/es-syntax': 'off'
      },
      settings: {
        node: {
          tryExtensions: ['.ts', '.js', '.json', '.node']
        }
      }
    },
    {
      files: ['bin/**/*.js'],
      rules: {
        'no-process-exit': 'off'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  root: true
};
