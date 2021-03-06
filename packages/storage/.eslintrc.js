module.exports = {
  extends: '../../config/.eslintrc.json',
  parserOptions: {
    project: 'tsconfig.json',
    // to make vscode-eslint work with monorepo
    // https://github.com/typescript-eslint/typescript-eslint/issues/251#issuecomment-463943250
    tsconfigRootDir: __dirname
  },
  rules: {
    'no-throw-literal': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '^_',
        args: 'none'
      }
    ]
  }
};
