module.exports = {
  moduleFileExtensions: [
    'js',
    'json',
    'vue',
  ],
  moduleNameMapper: {
    quasar: '<rootDir>/node_modules/quasar-framework/dist/umd/quasar.mat.umd.js',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testMatch: [
    '**/tests/pages/**/*.spec.js',
  ],
  snapshotSerializers: [
    'jest-serializer-vue',
  ],
  transform: {
    '.*\\.(vue)$': 'vue-jest',
    '^.+\\.jsx?$': 'babel-jest',
  },
  coverageReporters: [
    'json',
    'lcov',
    'text',
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/pages/*.{js,vue}',
    'src/components/*.{js,vue}',
    '!**/node_modules/**',
  ],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
};
