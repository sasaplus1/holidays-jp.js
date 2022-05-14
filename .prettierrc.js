module.exports = {
  singleQuote: true,
  trailingComma: 'none',
  overrides: [
    {
      files: '*.json',
      optoins: {
        parser: 'json-stringify'
      }
    }
  ]
};
