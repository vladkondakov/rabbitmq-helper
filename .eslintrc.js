module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
      project: 'tsconfig.json',
      sourceType: 'module',
      ecmaVersion: 2021,
  },
  plugins: [
      '@typescript-eslint/eslint-plugin',
      'promise',
      'no-loops',
  ],
  extends: [
      'airbnb-base',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
      'plugin:promise/recommended',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:promise/recommended',
  ],
  root: true,
  env: {
      node: true,
      es2021: true,
  },
  ignorePatterns: ['dist', 'k8s', 'src/migrations', '.eslintrc.js'],
  rules: {
      /* common rules */
      'import/no-extraneous-dependencies': [
          'error',
          {
              'packageDir': './'
          }
      ],
      'import/prefer-default-export': 'off',
      'import/extensions': 'off',

      /* prettier rules */
      'prettier/prettier': ['error', { 'printWidth': 80 }],
      "prettier/prettier": ["error", { 'endOfLine': 'auto'}],

      /* error rules ts */
      '@typescript-eslint/no-explicit-any': 'off', // should be 'error'
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { ignoreRestSiblings: true },
      ],
      '@typescript-eslint/explicit-member-accessibility': 'off', // should be 'error'
      '@typescript-eslint/explicit-module-boundary-types': 'off', // 'should be 'error'
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/camelcase': 'off',

      /* error rules js */
      'no-loops/no-loops': 2,

      /* error rules node */
      'no-sync': 'error',

      /* error rules code-style */
      'newline-before-return': 'error',
      'no-restricted-imports': ['error', {'patterns': ['src/*']}],
      'no-empty-function': ['error', { 'allow': ['constructors'] }],
      'no-use-before-define': [1, "nofunc"], // same as 'no-use-before-define': ['error', { "functions": false, "classes": true, "variables ": true }]

      /* disabled rules */
      'import/no-unresolved': 'off',
      'no-unused-var': 'off',
      'class-methods-use-this': 'off',
      'no-unused-vars': 'off',
      'no-useless-constructor': 'off',
      'no-shadow': 'off',
      'implicit-arrow-linebreak': 'off',
      'indent': 'off',
      'operator-linebreak': 'off',
      'brace-style': 'off',
      'object-curly-newline': 'off',
      'consistent-return': 'off',
      'max-classes-per-file': 'off',
      'no-param-reassign': 'off',
      'camelcase': 'off',
  },
};
