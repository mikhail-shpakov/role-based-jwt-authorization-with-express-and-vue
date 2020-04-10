module.exports = {
  verbose: true,
  bail: 1,
  testEnvironment: 'node',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/src/config/'
  ],
  modulePathIgnorePatterns: [
    '/__tests__/helpers/'
  ]
}
