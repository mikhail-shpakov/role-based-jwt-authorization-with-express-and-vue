module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],

  rules: {
    'no-console': 'warn',
    'no-debugger': 'warn'
  },

  parserOptions: {
    parser: 'babel-eslint'
  },

  overrides: [
    {
      files: '**/*.spec.js',
      rules: {
        'node/no-unpublished-require': 0,
        'node/no-missing-require': 0
      },
      env: {
        jest: true
      }
    }
  ]
}
