module.exports = {
  env: {
    node: true,
    commonjs: true,
    es6: true
  },

  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    'standard',
    'plugin:jest/style',
    'plugin:jest/recommended',
    'plugin:security/recommended'
  ],

  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },

  parserOptions: {
    ecmaVersion: 2020
  },

  plugins: [
    'jest',
    'security'
  ],

  rules: {
    camelcase: 'off',
    'node/exports-style': ['error', 'module.exports'],
    'node/file-extension-in-import': ['error', 'always'],
    'node/prefer-global/buffer': ['error', 'always'],
    'node/prefer-global/console': ['error', 'always'],
    'node/prefer-global/process': ['error', 'always'],
    'node/prefer-global/url-search-params': ['error', 'always'],
    'node/prefer-global/url': ['error', 'always'],
    'node/prefer-promises/dns': 'error',
    'node/prefer-promises/fs': 'error',
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error'
  },

  overrides: [{
    files: '**/*.spec.js',
    rules: {
      'node/no-unpublished-require': 0,
      'node/no-missing-require': 0,
      'jest/no-test-callback': 0
    }
  }]
}
