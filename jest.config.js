// ドキュメント参照：https://nextjs.org/docs/testing#jest-and-react-testing-library
const nextJest = require('next/jest');

const createJestConfig = nextJest({ dir: './' });

// カスタムもドキュメント参照：https://jestjs.io/docs/configuration
const customJestConfig = {
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^recoil$': 'recoil-mock', // recoil-mockを使う場合記述：https://github.com/babel-jp/recoil-mock
    '^@/(.*)$': '<rootDir>/src/$1', // Tsconfig.jsonに記載したパスと同じパス
  },
  coverageThreshold: {
    global: {
      lines: 80, // 最低網羅率
    },
  },
};

module.exports = createJestConfig(customJestConfig);
