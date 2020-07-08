module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!src/main.js', // No need to cover bootstrap file
  ],
  preset: '@vue/cli-plugin-unit-jest',
};
