module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    "header-max-length": [1, 'always', 72],
    "references-empty": [1, 'never']
  }
};