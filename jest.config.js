module.exports = {
  globals: {
    __DEV__: true,
  },
  setupFilesAfterEnv: [
    '<rootDir>/test/jest/jest.setup.js',
  ],
  // noStackTrace: true,
  bail: true,
  cache: false,
  // verbose: true,
  // watch: true,
  collectCoverage: true,
  coverageDirectory: '<rootDir>/test/jest/coverage',
  collectCoverageFrom: [
    '<rootDir>/src/components/**/*.{vue,js}',
    '<rootDir>/src/layouts/**/*.{vue,js}',
    '<rootDir>/src/pages/**/*.{vue,js}',
    '<rootDir>/src/router/**/*.{vue,js}',
    '<rootDir>/src/store/**/*.{vue,js}',
    '<rootDir>/src/statics/**/*.{vue,js}',
  ],
  coverageThreshold: {
    global: {
      // branches: 50,
      // functions: 50,
      // lines: 50,
      // statements: 50,
    },
  },
  testMatch: [
    '<rootDir>/test/jest/__tests__/**/*.spec.js',
    '<rootDir>/test/jest/__tests__/**/*.test.js',
    '<rootDir>/src/**/__tests__/*_jest.spec.js',
  ],
  moduleFileExtensions: [
    'vue',
    'js',
  ],
  moduleNameMapper: {
    '^vue$': '<rootDir>/node_modules/vue/dist/vue.common.js',
    '^test-utils$': '<rootDir>/node_modules/@vue/test-utils/dist/vue-test-utils.js',
    '^quasar$': '<rootDir>/node_modules/quasar/dist/quasar.common.js',
    '^~/(.*)$': '<rootDir>/$1',
    '^src/(.*)$': '<rootDir>/src/$1',
    '.*css$': '<rootDir>/test/jest/utils/stub.css',
  },
  transform: {
    '.*\\.vue$': 'vue-jest',
    '.*\\.js$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    // use these if NPM is being flaky
    // '.*\\.vue$': '<rootDir>/node_modules/@quasar/quasar-app-extension-testing-unit-jest/node_modules/vue-jest',
    // '.*\\.js$': '<rootDir>/node_modules/@quasar/quasar-app-extension-testing-unit-jest/node_modules/babel-jest'
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!quasar/lang)',
  ],
  snapshotSerializers: [
    '<rootDir>/node_modules/jest-serializer-vue',
  ],
};
