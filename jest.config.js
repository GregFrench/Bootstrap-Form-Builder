module.exports = {
  collectCoverage: false,
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!src/main.js', // No need to cover bootstrap file
  ],
  preset: '@vue/cli-plugin-unit-jest',
};
