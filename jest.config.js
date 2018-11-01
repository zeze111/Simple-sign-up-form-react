module.exports = {
  verbose: true,
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/server/',
    '/client/Index.jsx',
    '/client/tests/testSetup.js'
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/vendor/**'
  ],
  rootDir: 'client',
  roots: ['<rootDir>'],
  setupFiles: [
    '<rootDir>/tests/testSetup.js'
  ],
  moduleFileExtensions: [
    'js',
    'jsx'
  ],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy'
  },
  snapshotSerializers: ['enzyme-to-json/serializer']
};
