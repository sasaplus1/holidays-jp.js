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
      env: {
        mocha: true
      },
      files: ['**/*.test.js']
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
