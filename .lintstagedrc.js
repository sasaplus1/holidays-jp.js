module.exports = {
  '*.+(js|ts)': ['eslint', 'prettier --check'],
  '*.+(md|yml)': 'prettier --check',
  'package.json': [
    'npx fixpack --dryRun',
    'prettier --check --parser json-stringify'
  ],
  'package-lock.json': 'node -e "process.exit(1)"'
};
