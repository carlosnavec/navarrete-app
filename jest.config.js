module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    "\\.[jt]sx?$": "babel-jest",
    "\\.css$": "some-css-transformer",
  },
  transformIgnorePatterns: [
    '/node_modules/(?!axios)',
    '/node_modules/(?!antd).+\\.js$'
  ],
};