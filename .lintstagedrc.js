module.exports = {
  'package.json': [
    'npx fixpack',
    'git diff --exit-code --quiet'
  ],
  'package-lock.json': 'node -e "process.exit(1);"'
};
