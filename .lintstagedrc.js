module.exports = {
  '*.+(js|mjs|ts)': ['eslint', 'prettier --check'],
  '*.+(json|md|yml)': 'prettier --check',
  'package.json': 'npx fixpack --dryRun',
  'package-lock.json': 'node -e "process.exitCode = 1"'
};
