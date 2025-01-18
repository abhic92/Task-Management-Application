module.exports = {
  roots: ['<rootDir>/src_components', '<rootDir>/context_components'],
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  moduleDirectories: ['node_modules', 'src_components', 'context_components'],
  testPathIgnorePatterns: ['/node_modules/', '/src/'],
};
