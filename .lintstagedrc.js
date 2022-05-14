module.exports = {
  '*.+(js|mjs|ts)': ['eslint', 'prettier --check'],
  '*.+(md|yml)': 'prettier --check',
  '!(package|package-lock).json': 'prettier --check --parser json-stringify',
  'package.json': [
    'npx fixpack --dryRun',
    'prettier --check --parser json-stringify'
  ],
  'package-lock.json': 'node -e "process.exitCode = 1"'
};
