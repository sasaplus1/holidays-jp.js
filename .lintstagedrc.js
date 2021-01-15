module.exports = {
  '*.(js|ts)': ['eslint --cache --ext .js,.ts', 'prettier --check'],
  '*.yml': 'prettier --check --parser yaml',
  'package.json': ['npx fixpack', 'prettier --check --parser json-stringify'],
  'package-lock.json': 'node -e "process.exit(1);"'
};
