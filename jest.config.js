module.exports = {
  collectCoverageFrom: ['src/**/*.js', 'src/**/*.js'],
  roots: ['<rootDir>/src'],
  modulePaths: ['<rootDir>/src'],
  moduleDirectories: ["node_modules", 'src'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  // setupFilesAfterEnv: ['<rootDir>/src/setupEnzyme.ts'],
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
    '^.+\\.(svg)$': '<rootDir>/src/__mocks__/fileMock.ts',

    '^index': '<rootDir>/src/index.tsx',
    '^src/(.*)$': '<rootDir>/src/$1',
    '^pages/(.*)$': '<rootDir>/src/pages/$1',
    '^state/(.*)$': '<rootDir>/src/state/$1',
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^forms/(.*)$': '<rootDir>/src/forms/$1',
    '^utils/(.*)$': '<rootDir>/src/utils/$1',
    'lodash-es': '<rootDir>/node_modules/lodash/index.js',
    '@abc/uno-app': '<rootDir>/src/__mocks__/unoApp.ts',
  },
}
